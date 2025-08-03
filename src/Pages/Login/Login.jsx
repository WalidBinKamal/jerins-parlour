import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/logo.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { login } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        login(data)
        navigate(from)
    }


    return (
        <div className='bg-white'>
            <div className='grid justify-center item center gap-4 md:mt-28 mt-10'>
                <Link to={'/'} className="btn btn-ghost p-4 mb-8"><img className='w-48' src={icon} alt="" /></Link>
                <div>
                    <form className='border border-gray-400  p-8' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='p-2 text-xl font-semibold'>Login with</h2>
                        <div>
                            <input className="border-b p-2 mt-8 w-full" {...register("email")} placeholder="Email" />
                            <input className="border-b p-2 mt-8 w-full" {...register("password")} placeholder="Password" />
                        </div>
                        <div className="md:flex justify-center mt-10 mb-8">
                            <input className="btn bg-pink-500 px-10 w-full font-normal text-white rounded-md" type="submit" value='Login' />
                        </div>
                        <p className='text-center'>Don’t have an account? <Link to={'/signup'} className='text-pink-400'>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;