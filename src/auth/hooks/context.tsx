import { onAuthStateChanged, UserCredential } from "firebase/auth";
import { useState, createContext, useEffect } from "react"
import { ChildrenProps } from "../../common/types";
import { auth } from "../firebase/config";

export type UserAuth = (UserCredential["user"] | undefined);
export type UserContext = {
    user: UserAuth,
    loading: boolean,
    onChangeUser: (user: UserCredential["user"]) => void
};

export const AuthContext = createContext<UserContext>({} as UserContext);

const AuthContextProvider = (props: ChildrenProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserAuth>()
    const onChangeUser = (user: UserCredential["user"]) => {
        setUser(user);
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                setUser(undefined)
            }
            setLoading(false);
        })
        return () => {
            unsuscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, onChangeUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider