import DashboardNavbar from '../Shared/DashboardNavbar';
import useUserData from '../../Hooks/useUserData';
import useAuth from '../../Hooks/useAuth';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useToast from '../../Hooks/useToast';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const MyProfile = () => {
    const { user: email } = useAuth();
    const [userData] = useUserData(email);
    const fullName = `${userData?.firstName ?? ""} ${userData?.lastName ?? ""}`.trim();
    const axiosPublic = useAxiosPublic()
    const toast = useToast()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
    } = useForm({
        defaultValues: {
            firstName: userData?.firstName,
            email: userData?.email || '',
            image: null,
        }
    });

    useEffect(() => {
        if (userData) {
            reset({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                image: null,
            });
        }
    }, [userData, reset]);

    const imageFile = watch('image');
    const [preview, setPreview] = useState(userData?.image || null);

    useEffect(() => {
        if (imageFile && imageFile.length > 0) {
            const file = imageFile[0];
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        } else if (userData?.image) {
            // If imageFile is cleared, reset preview to userData image
            setPreview(userData.image);
        } else {
            setPreview(null);
        }
    }, [imageFile, userData?.image]);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setValue('image', acceptedFiles, { shouldValidate: true });
        },
        [setValue]
    );

    const { getRootProps, getInputProps, open } = useDropzone({
        accept: { 'image/*': [] },
        multiple: false,
        noClick: false,
        onDrop,
    });

    const onSubmit = async (data) => {
        let image
        if (data.image) {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            })
            image = res.data.data.url
        }
        const newData = {
            ...data,
            image: image
        }
        axiosPublic.put(`/users/${email}`, newData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast({ title: "Information update is Successful", icon: "success" })
                }
                else {
                    toast({ title: `${res?.data?.message}`, icon: "error" })
                }
            })
        reset()
        console.log(newData)
    };

    return (
        <div>
            <DashboardNavbar title="My Profile" name={fullName} />
            <div className="mt-10 ml-8 md:w-2/4">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div
                        {...getRootProps()}
                        className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer bg-gray-100 mb-5"
                        onClick={open}
                    >
                        <input {...getInputProps()} {...register('image')} />
                        {preview ? (
                            <img
                                src={preview}
                                alt="Profile preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-500 text-sm text-center px-2">
                                Drop Image
                            </span>
                        )}
                    </div>

                    <input
                        className="p-4 mb-1 w-full"
                        {...register('firstName')}
                        defaultValue={userData?.firstName}
                    />
                    <input
                        className="p-4 mb-1 w-full"
                        {...register('lastName')}
                        defaultValue={userData?.lastName}
                    />
                    <input
                        className="p-4 mb-1 w-full"
                        {...register('email')}
                        defaultValue={userData?.email}
                        readOnly
                    />
                    <input className="border-b p-2 mt-8 w-full" type='text'
                        {...register("password")}
                        placeholder="Change Password" />
                    <p className=' p-1 text-sm text-pink-400'>Update your details by editing fields or dragging in a new image.</p>

                    <input
                        type="submit"
                        className="btn bg-pink-500 md:px-8 text-white rounded-md w-full"
                        value="Update User Info"
                    />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;