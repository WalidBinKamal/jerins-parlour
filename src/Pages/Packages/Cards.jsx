import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import useAuth from "../../Hooks/useAuth";


const Cards = () => {
    const [services, refetch,] = useServices()
    const { user: email, setBooking } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const handleBooking = (id) => {
        // console.log(booking)
        if (!email) {
            navigate("/login", { state: { from: location }, replace: true })
        }
        navigate("/dashboard/booking", { state: { serviceId: id } })
    }
    refetch()
    return (
        <div className='bg-white'>
            <div className='md:max-w-7xl mx-auto'>
                <div className="grid md:grid-cols-3 gap-4 my-14 p-10">
                    {
                        services.map((service, index) =>
                            <div key={service._id} className='card shadow-md p-5'>
                                <figure>
                                    <div className="flex justify-between">
                                        <img
                                            className="w-20"
                                            src={service.image} />
                                        <p className="text-sm text-pink-400">($ {service.price})</p>
                                    </div>
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="text-xl">
                                        {service.title}
                                    </h2>
                                    <p className="text-sm text-pink-400">First Glance: <span className="font-light text-black">{service.intro}</span></p>
                                    <p className="font-semibold text-pink-400 leading-relaxed text-justify">Package Details: <span className="font-normal text-black">{service.description}</span></p>
                                    <button onClick={() => handleBooking(service._id)} className="btn bg-pink-500 px-10 text-white rounded-md">Add to Booking</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;