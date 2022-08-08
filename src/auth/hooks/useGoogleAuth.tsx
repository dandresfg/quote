import { useContext } from "react";
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase/config";
import { AuthContext } from "./context";

const useGoogleAuth = () => {
    const { onChangeUser } = useContext(AuthContext);

    const onSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // if (credential) {
                //     const token = credential.accessToken;
                //     const user = result.user;
                //     console.log(token, user);
                //    // onChangeUser(user);
                // onChangeUser(result.user)
                // }
            })
            .catch((error) => alert('Tuvimos un error: ' + error.message));
    }
    return onSignIn
}

export default useGoogleAuth