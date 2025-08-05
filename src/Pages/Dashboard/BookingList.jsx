import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import DashboardNavbar from "../Shared/DashboardNavbar";

const BookingList = () => {
    const { user: email, } = useAuth()
    const [userData, refetch,] = useUserData(email)
    return (
        <div>
            <DashboardNavbar title="Book" name={userData.firstName}></DashboardNavbar>
            <div className="mt-10 ml-8 grid">
                booking list                
            </div>
        </div>
    );
};

export default BookingList;