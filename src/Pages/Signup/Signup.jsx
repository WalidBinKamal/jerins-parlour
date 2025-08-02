import { useForm } from 'react-hook-form';
import AccountNavbar from '../Shared/AccountNavbar';
import { Link, useLocation } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import api from '../../Hooks/api';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Signup = () => {
    const { signup, signupLoading, signupError, setLocation } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        signup(data)
    }
    const location = useLocation()
    const from = location.state?.from?.pathname
    setLocation()
    console.log(from)
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <AccountNavbar></AccountNavbar>
                <div className='grid justify-center items-center md:mt-20 mt-10'>
                    <form className='border border-gray-400 p-8 max-w-xl' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='p-2 text-xl font-semibold'>Create an account</h2>
                        <div>
                            <input className="border-b p-2 mt-8 w-full" type='text' {...register("firstName")} placeholder="First Name" />
                            <input className="border-b p-2 mt-8 w-full" type='text' {...register("lastName")} placeholder="Last Name" />
                            <input className="border-b p-2 mt-8 w-full" type='email' {...register("email")} placeholder="Email" />
                            <input className="border-b p-2 mt-8 w-full" type='password' {...register("password")} placeholder="Password" />
                            {/* <input className="border-b p-2 mt-8 w-full" type='password' {...register("confirmPassword")} placeholder="Confirm Password" /> */}
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