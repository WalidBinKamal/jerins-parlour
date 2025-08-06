import DashboardNavbar from '../Shared/DashboardNavbar';
import useUserData from '../../Hooks/useUserData';
import useAuth from '../../Hooks/useAuth';

const MyProfile = () => {
    const { user: email, } = useAuth()
    const [userData, ,] = useUserData(email)
    const fullName = userData.firstName + " " + userData.lastName
    console.log(userData)
    return (
        <div>
            < DashboardNavbar title="My Profile" name={fullName} ></DashboardNavbar>
        </div>
    );
};

export default MyProfile;