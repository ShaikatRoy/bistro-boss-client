import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hocks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAuth();
    const location = useLocation();
    
    if(loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default AdminRoute;