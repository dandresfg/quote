import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth";

const PrivateRoutes = () => {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('auth', { replace: true })
        }
    }, [user])

    return (
        <Outlet />
    );
}

export default PrivateRoutes;