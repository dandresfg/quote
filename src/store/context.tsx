import { createContext, useState } from "react"
import { ChildrenProps, INote } from "../common/types"

interface INotesContext {
    notes: INote[],
    editable?: INote,
    onPushNote: (n: INote) => void
    onSelectNote: (n: INote) => void
}
export const NotesContext = createContext({} as INotesContext);

const NotexsContextProvider = (props: ChildrenProps) => {
    const [notes, setNotes] = useState<INote[]>([])
    const [editable, setEditableNote] = useState<INote | undefined>();

    const onPushNote = (note: INote) => {
        if (editable) {
            // update in firebase
            setNotes(state => state.map(item => item.id === note.id ? note : item));
            setEditableNote(undefined);
        } else {
            // upload in firebase
            setNotes(state => [...state, note]);
        }
    }

    const onSelectNote = (note: INote) => {
        setEditableNote(note);
    }

    return (
        <NotesContext.Provider value={{ notes, editable, onPushNote, onSelectNote }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotexsContextProvider