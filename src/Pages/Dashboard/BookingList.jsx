import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DashboardNavbar from "../Shared/DashboardNavbar";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BookingList = () => {
    const { user: email, } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        axiosSecure.get(`/booking/${email}`)
            .then(res => setBookings(res.data))
    }, [])
    return (
        <div>
            <DashboardNavbar title="Booking List"></DashboardNavbar>
            <div className="m-12 md:pl-8 md:grid grid-cols-2 justify-start gap-4">
                {
                    bookings.length === 0?
                    <p className="text-xl">No bookings have been made.</p>
                    :
                    bookings.map((booking) =>
                <div key={booking._id} className='bg-white md:p-7 p-3 lg:w-9/12'>
                    <div className="md:flex justify-between items-center mb-2">
                        <img
                            className="w-20"
                            src={booking.image} />
                        <p className={`btn text-lg border-none px-8 ${booking.status === "Pending" ?
                            'bg-[#ffe3e3] text-red-500' :
                            'bg-green-200 text-green-500'}`}>
                            {booking.status}
                        </p>
                    </div>
                    <div className=" md:pt-2">
                        <h2 className="font-bold mb-1 text-xl">{booking.name}</h2>
                        <p className="leading-relaxed text-justify">{booking.description}</p>
                    </div>
                </div>
                )
                }
            </div>
        </div>
    );
};

export default BookingList;