import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";


const Services = () => {
    const [services, refetch,] = useServices()
    return (
        <div className="bg-white">
            <div className="font-semibold py-20 text-center max-w-7xl mx-auto">
                <h3 className='uppercase text-4xl'>our awsome <span className="text-pink-500">services</span></h3>
                <div className="grid md:grid-cols-3 gap-4 my-14">
                    {
                        services.slice(0, 3).map((service, index) =>
                            <div key={service._id} className={`card ${index === 1 && 'shadow-lg bg-base-100'}`}>
                                <figure>
                                    <img
                                        className="w-20"
                                        src={service.image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-xl">
                                        {service.title}
                                    </h2>
                                    <p>$ {service.price}</p>
                                    <p className="text-sm font-light">{service.intro}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button className="btn bg-pink-500 px-10 text-white rounded-md"><Link to="/services">Explore More</Link></button>
            </div>
        </div>
    );
};

export default Services;