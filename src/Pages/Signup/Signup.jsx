import { useForm } from 'react-hook-form';
import AccountNavbar from '../Shared/AccountNavbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import api from '../../Hooks/api';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Signup = () => {
    const { signup, signupLoading, signupError } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        signup(data)
        navigate(from)
    }
    const password = watch("password");

    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <AccountNavbar></AccountNavbar>
                <div className='grid justify-center items-center md:mt-20 mt-10'>
                    <form className='border border-gray-400 p-8 max-w-xl' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='p-2 text-xl font-semibold'>Create an account</h2>
                        <div>
                            <input className="border-b p-2 mt-8 w-full" type='text'
                                {...register("firstName",
                                    { required: "First name is required" })}
                                placeholder="First Name*" />
                            {errors.firstName && <p className='text-red-300 p-2'>{errors.firstName.message}</p>}
                            <input className="border-b p-2 mt-8 w-full" type='text'
                                {...register("lastName",
                                    { required: "Last name is required" })}
                                placeholder="Last Name*" />
                            {errors.lastName && <p className='text-red-300 p-2'>{errors.lastName.message}</p>}
                            <input className="border-b p-2 mt-8 w-full" type='email'
                                {...register("email",
                                    { required: "Email is required" })}
                                placeholder="Email*" />
                            {errors.email && <p className='text-red-300 p-2'>{errors.email.message}</p>}
                            <input className="border-b p-2 mt-8 w-full" type='password'
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                placeholder="Password*" />
                            {errors.password && <p className='text-red-300 p-2'>{errors.password.message}</p>}
                            <input className="border-b p-2 mt-8 w-full" type='password'
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                                placeholder="Confirm Password*" />
                            {errors.confirmPassword && <p className='text-red-300 p-2'>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="md:flex justify-center mt-10 mb-8">
                            <input className="btn bg-pink-500 px-10 w-full text-white rounded-md font-normal" type="submit" value='Create an account' />
                        </div>
                        <p className='text-center'>Already have an account? <Link to={'/login'} className='text-pink-400'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;