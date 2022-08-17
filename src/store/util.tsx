import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../auth/firebase/config";

export const uploadImage = async (filename: string, file: File | Blob) => {
    const imageRef = ref(storage, filename);
    const snapshot = await uploadBytes(imageRef, file)
    return await getDownloadURL(snapshot.ref)
}