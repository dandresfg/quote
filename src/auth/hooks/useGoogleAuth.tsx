import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase/config";

const useGoogleAuth = () => {
    const onSignIn = () => {
        signInWithPopup(auth, provider)
            .catch((error) => alert('Tuvimos un error: ' + error.message));
    }
    return onSignIn
}

export default useGoogleAuth