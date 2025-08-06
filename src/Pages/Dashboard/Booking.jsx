import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import DashboardNavbar from "../Shared/DashboardNavbar";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";

const Booking = () => {
    const axiosSecure = useAxiosSecure()
    const [service, setService] = useState([])
    const { user: email, } = useAuth()
    const [userData, ,] = useUserData(email)
    const location = useLocation()
    const navigate = useNavigate()
    const toast = useToast()
    const serviceId = location.state?.serviceId
    const fullName = userData.firstName + " " + userData.lastName

    useEffect(() => {
        if (serviceId) {
            axiosSecure.get(`/service/${serviceId}`)
                .then(res => setService(res.data))
        }
    }, [])

    const booking = {
        serviceId: service._id,
        email: userData.email,
        name: service.title,
        description: service.description,
        image: service.image,
        status: "Pending",
        price: service.price,
    }

    const handleBooking = () => {
        axiosSecure.post('/booking', booking)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast({ title: `Your Payment is Complete`, icon: "success" })
                    navigate('/dashboard/bookingList')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <DashboardNavbar title="Book" name={fullName}></DashboardNavbar>
            <div className="mt-10 ml-8 md:w-2/4">
                <div>
                    <input className="p-4 mb-5 w-full" value={fullName} readOnly />
                    <input className="p-4 mb-5 w-full" value={userData?.email || ""} readOnly />
                    {
                        service.title ?
                            <>
                                <input className="p-4 mb-1 w-full" value={service?.title} readOnly />

                                <p className="text-sm text-pink-300">Change page to remove the booking</p>
                            </>
                            :
                            <input className="p-4 mb-5 w-full text-red-300" value="No service is selected for Booking" readOnly />
                    }
                </div>

                {/* TODO: Payment system Integration */}
                <div>
                    <p className="mt-6 text-gray-400">Pay with</p>
                </div>

                <div className="md:flex justify-between items-center mt-3">
                    <p className="">Your service charge will be <span className="font-bold">${service.price}</span></p>
                    <button onClick={handleBooking} disabled={!service.title} className={`btn bg-pink-500 md:py-6 md:px-8 text-white rounded-md disabled:cursor-not-allowed`}>Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;