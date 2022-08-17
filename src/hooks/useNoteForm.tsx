import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { INote } from "../common/types"
import { NotesContext } from "../store/context";

export const TITLE_LIMIT = 50;
const defaultState = {
    id: "",
    title: '',
    description: '',
    image: {
        url: '',
    },
    color: ''
}

const useNoteForm = (isUpdate?: boolean) => {
    const { onPushNote, onUpdateNote } = useContext(NotesContext)
    const [state, setState] = useState<INote>(defaultState)
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true);
    const onStateChange = (note: INote = defaultState) => {
        setState(note);
    }
    const onChangeColor = (hex: string) => {
        setState(oldState => ({ ...oldState, color: hex }))
        onFocus();
    }
    const onTextChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;
        setState(oldState => ({ ...oldState, [name]: value }));
    }
    const onFileClean = () => {
        setState({ ...state, image: { url: '' } })
    }
    const onFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const files = evt.target.files;
        if (files && files.length) {
            const file = files[0];
            setState({ ...state, image: { url: URL.createObjectURL(file), blob: file } })
            onFocus();
        }
    }
    const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const length = state.title.trim().length
        if (!(length && length < TITLE_LIMIT)) {
            return;
        }

        if (isUpdate){
            onUpdateNote(state);
        } else {
            onPushNote(state)
        }
        setState(defaultState);
    }

    return {
        state,
        focused,
        onFocus,
        onStateChange,
        onChangeColor,
        onTextChange,
        onFileChange,
        onFileClean,
        onFormSubmit
    }
}

export default useNoteForm