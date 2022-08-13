import { createContext, useEffect, useState } from "react"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db, storage } from "../auth/firebase/config";
import { ChildrenProps, INote } from "../common/types"
import useAuth from "../auth/hooks/useAuth";

interface INotesContext {
    notes: INote[],
    editable?: INote,
    loading: boolean,
    onPushNote: (n: INote) => void
    onSelectNote: (n: INote) => void
}

export const NotesContext = createContext({} as INotesContext);

const NotexsContextProvider = (props: ChildrenProps) => {
    const user = useAuth();
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState<INote[]>([])
    const [editable, setEditableNote] = useState<INote | undefined>();

    useEffect(() => {
        if (user) {
            const docQuery = query(collection(db, "notes"), where("userID", "==", user.uid));

            setLoading(true);
            getDocs(docQuery)
            .then(querySnapshot => {
                const noteList: INote[] = [];
                querySnapshot.forEach((doc) => noteList.push(doc.data() as INote))
                setNotes(noteList)
            })
            .catch(console.log)
            .finally(() => setLoading(false))
        }
    }, [ user ])

    const onPushNote = async (note: INote) => {
        if (editable) {
            setNotes(state => state.map(item => item.id === note.id ? note : item));
            setEditableNote(undefined);
        } else {
            try {
                if (note.image.blob) {
                    const imageRef = ref(storage, `images/${note.id}_${note.image.blob.name}`);
                    const snapshot = await uploadBytes(imageRef, note.image.blob)
                    note.image = {
                        url: await getDownloadURL(snapshot.ref)
                    };
                }
                await addDoc(collection(db, "notes"), { ...note, userID: user?.uid })
            } catch (error) {
                console.log(error)
            } finally {
                setNotes(state => [...state, note]);
            }
        }
    }

    const onSelectNote = (note: INote) => {
        setEditableNote(note);
    }

    return (
        <NotesContext.Provider value={{ notes, editable, loading, onPushNote, onSelectNote }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotexsContextProvider