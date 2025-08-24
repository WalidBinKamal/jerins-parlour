import { useForm } from 'react-hook-form';
import DashboardNavbar from '../Shared/DashboardNavbar';

const AddService = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    };
    return (
        <div>
            <DashboardNavbar title="Add Service"></DashboardNavbar>
            <div className='m-4' onSubmit={handleSubmit(onSubmit)}>
                <form className="card-body bg-white">
                    <div className='md:flex'>
                        <div className='md:w-1/2 '>
                            {/* title */}
                            <label className="form-control w-full">
                                <div className="label flex">
                                    <span className="label-text">Service Title</span>
                                </div>
                                <input
                                    className="p-4 mb-1 input input-bordered w-full"
                                    {...register('title')}
                                    defaultValue="Enter title"
                                />
                            </label>
                            {/* intro */}
                            <label className="form-control w-full">
                                <div className="label flex">
                                    <span className="label-text">Intro</span>
                                </div>
                                <input
                                    className="p-4 mb-1 input input-bordered w-full"
                                    {...register('intro')}
                                    defaultValue="Short Intro"
                                />
                            </label>
                            {/* description */}
                            <label className="form-control w-full">
                                <div className="label flex">
                                    <span className="label-text">Description</span>
                                </div>
                                <input
                                    className="p-4 mb-1 input input-bordered w-full"
                                    {...register('description')}
                                    defaultValue="Description"
                                />
                            </label>
                            {/* price */}
                            <label className="form-control w-full">
                                <div className="label flex">
                                    <span className="label-text">Price</span>
                                </div>
                                <input
                                    className="p-4 mb-1 input input-bordered w-full"
                                    {...register('price')}
                                    defaultValue="Price"
                                />
                            </label>
                        </div>
                        <div>Image</div>
                    </div>
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

export default AddService;