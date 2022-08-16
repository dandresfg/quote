import { createContext, useEffect, useState } from "react"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase/config";
import { uploadImage } from "./util";
import { ChildrenProps, INote } from "../common/types"
import { UserCredential } from "firebase/auth";
import useAuth from "../auth/hooks/useAuth";

interface INotesContext {
    notes: INote[]
    editable?: INote
    loading: boolean
    onUpdateNote: (n: INote) => void
    onPushNote: (n: INote) => void
    onSelectNote: (n: INote) => void
}

export const NotesContext = createContext({} as INotesContext);

const NotesContextProvider = (props: ChildrenProps) => {
    const user = useAuth() as UserCredential["user"];
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState<INote[]>([])
    const [editable, setEditableNote] = useState<INote | undefined>();

    useEffect(() => {
        setLoading(true);
        getDocs(collection(db, "notes"))
        .then(querySnapshot => {
            const noteList: INote[] = [];
            querySnapshot.forEach((doc) => noteList.push(doc.data() as INote))
            setNotes(noteList)
        })
        .catch(console.log)
        .finally(() => setLoading(false))
    }, [])

    const onUpdateNote = async (note: INote) => {
        try {
            const editor: typeof note.owner = {
                name: user.displayName || "Anonymous",
                email: user.email || "Anonymous@gmail.com",
                date: Date.now()
            }
            note.editors = [...(note.editors || []), editor]
            setNotes(state => state.map(item => item.id === note.id ? note : item));
            setEditableNote(undefined);
        } catch (error) {
            console.log(error)
        }
    }

    const onPushNote = async (note: INote) => {
        try {
            note.editors = [];
            note.owner = {
                name: user.displayName || "Anonymous",
                email: user.email || "Anonymous@gmail.com",
                date: Date.now()
            }
            setNotes(state => [...state, note]);
            if (note.image.blob) {
                const url = await uploadImage(`images/${note.id}_${note.image.blob.name}`, note.image.blob)
                note.image = { url };
            }
            await addDoc(collection(db, "notes"), note)
        } catch (error) {
            console.log(error)
        }
    }

    const onSelectNote = (note: INote) => {
        setEditableNote(note);
    }

    return (
        <NotesContext.Provider value={{ notes, editable, loading, onPushNote, onUpdateNote, onSelectNote }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider