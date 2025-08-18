import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { isAdmin, isAdminLoading, user } = useAuth()
    const location = useLocation()
    if (isAdminLoading) {

        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin?.admin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;