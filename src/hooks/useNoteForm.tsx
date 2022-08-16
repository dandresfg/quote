import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { INote } from "../common/types"
import { NotesContext } from "../store/context";
import { v4 as uuidv4 } from 'uuid';

export const TITLE_LIMIT = 60;
const defaultState = {
    id: 0,
    title: '',
    description: '',
    image: {
        url: '',
    },
    color: ''
}

const useNoteForm = () => {
    const { onPushNote } = useContext(NotesContext)
    const [state, setState] = useState<INote>(defaultState)
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true);

    const onChangeColor = (hex: string) => {
        setState(oldState => ({ ...oldState, color: hex }))
        onFocus();
    }
    const onCleanColor = () => {
        setState(oldState => ({ ...oldState, color: '' }))
    }
    const onTextChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;
        setState(oldState => ({ ...oldState, [name]: value }));
    }
    const onFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const files = evt.target.files;
        if (!files || (files && !files[0])) {
            setState({ ...state, image: { url: '' } })
        } else {
            const file = files[0];
            setState({ ...state, image: { url: URL.createObjectURL(file), blob: file } })
            onFocus();
        }
    }
    const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const length = state.title.trim().length
        if (length && length < TITLE_LIMIT) {
            onPushNote({ ...state, id: uuidv4() })
            setState(defaultState);
        }
    }

    return {
        state,
        focused,
        onFocus,
        onChangeColor,
        onCleanColor,
        onTextChange,
        onFileChange,
        onFormSubmit
    }
}

export default useNoteForm