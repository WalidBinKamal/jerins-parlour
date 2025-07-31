import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ProjectForm from "./ProjectForm";
import Services from "./Services";
import Professional from "./Professional";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jerin's Parlour | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Professional></Professional>
            <Testimonials></Testimonials>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default Home;