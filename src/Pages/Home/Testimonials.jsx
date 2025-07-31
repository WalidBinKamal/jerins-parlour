import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })
    return (
        <div className="bg-white">
            <div className="md:max-w-7xl mx-auto py-20">
                <h2 className='text-3xl text-center font-semibold'>Testimonals</h2>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Testimonials;