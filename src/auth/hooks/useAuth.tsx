import { useContext } from "react";
import { AuthContext } from "./context";

const useAuth = () => {
    const { user } = useContext(AuthContext);
    return user
}

export default useAuth