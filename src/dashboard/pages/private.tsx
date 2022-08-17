import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth";
import NotesContextProvider from "../../store/context";

const PrivateRoutes = () => {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('auth', { replace: true })
        }
    }, [user])

    if(!user) return <div />

    return (
        <NotesContextProvider>
            <Outlet />
        </NotesContextProvider>
    );
}

export default PrivateRoutes;