import { useForm } from "react-hook-form";


const ProjectForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="md:max-w-7xl md:mx-auto my-20">
            <h1 className="md:w-2/4 mx-auto text-center text-4xl font-semibold mb-6">Let us handle your
                project, professionally.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-4 justify-center">
                    <input className="md:w-1/4 mt-4 p-3 text-sm" {...register("fullName")} placeholder="Full Name" />
                    <input className="md:w-1/4 mt-4 p-3 text-sm" {...register("lastName")} placeholder="Last Name" />
                </div>
                <div className="md:flex gap-4 justify-center">
                    <input className="md:w-1/4 mt-4 p-3 text-sm" {...register("email")} placeholder="Email Address" />
                    <input className="md:w-1/4 mt-4 p-3 text-sm" {...register("phoneNumber")} placeholder="Phone Number" />
                </div>
                <div className="md:flex justify-center mt-4">
                    <textarea className="md:w-2/4 md:p-4 m-4" {...register("message")} placeholder="Your Message"></textarea>
                </div>
                <div className="md:flex justify-center mt-4 mb-8">
                    <input className="btn bg-pink-500 px-10 text-white rounded-md" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;