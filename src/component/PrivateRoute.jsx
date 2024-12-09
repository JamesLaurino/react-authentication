import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "./AuthProvider.jsx";


export default function PrivateRoute ()
{
    const user = useAuth();

    if (!user.token)
    {
        return <Navigate to="/login"/>;
    }

    return <Outlet />;
};