import { Controller, useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import DashboardNavbar from "../Shared/DashboardNavbar";
import { Rating } from "@smastrom/react-rating";
import { useRef } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";


const Review = () => {
    const { user: email, } = useAuth()
    const axiosSecure = useAxiosSecure()
    const toast = useToast()

    const {
        register,
        handleSubmit,
        control,
        reset,
    } = useForm({
        defaultValues: { name: "", designation: "", review: "", rating: 0, email: email },
    })
    const ratingRef = useRef(null);

    const onSubmit = (data) => {
        axiosSecure.post('/reviews', data)
            .then(res => {
                toast({ title: `Your Review is Submitted. Thank you.`, icon: "success" })
                reset()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <DashboardNavbar title="Booking List"></DashboardNavbar>
            <div className="md:w-2/4 mt-10 ml-8">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="p-4 mb-1 w-full" {...register("name")} placeholder="Your Name" />
                    <input className="p-4 mb-1 w-full" {...register("designation")} placeholder="Company's name, Designation" />
                    <textarea className="p-4 mb-1 w-full h-28" {...register("review")} placeholder="Description"></textarea>
                    {/* Rating add */}
                    <div ref={ratingRef} className="py-2">
                        <label className="block mb-2 font-medium">Rating</label>
                        <Controller
                            name="rating"
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                                <Rating
                                    // show current value
                                    style={{ maxWidth: 180 }}
                                    ref={ratingRef}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                    <input type="submit" className={`btn bg-pink-500 md:px-8 text-white rounded-md`} />
                </form>
            </div>
        </div>
    );
};

export default Review;