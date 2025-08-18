import useAuth from '../../Hooks/useAuth';
import useUserData from '../../Hooks/useUserData';

const DashboardNavbar = ({ title }) => {
    const { user: email, } = useAuth()
    const [userData, ,] = useUserData(email)
    const fullName = userData.firstName + " " + userData.lastName
    return (
        <div className='flex justify-between bg-white p-7'>
            <div className='text-lg font-semibold'>{title}</div>
            <div className='text-lg font-semibold'>{fullName}</div>
        </div>
    );
};

export default DashboardNavbar;