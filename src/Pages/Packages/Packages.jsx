import { Helmet } from "react-helmet-async";
import Cards from "./Cards";
import Cover from "./Cover";

const Packages = () => {
    return (
        <div>
            <Helmet>
                <title>Jerin's Parlour | Packages</title>
            </Helmet>
            <Cover></Cover>
            <Cards></Cards>
        </div>
    );
};

export default Packages;