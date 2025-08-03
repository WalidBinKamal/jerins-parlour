import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const useRedirect = (user) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate(navigate("/login", { state: { from: location }, replace: true }))
        }
    }, [user, navigate, location])
};

export default useRedirect;