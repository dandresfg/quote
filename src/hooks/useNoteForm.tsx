import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { INote } from "../common/types"
import { NotesContext } from "../store/context";

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
        if (state.title.trim().length) {
            onPushNote({ ...state, id: Date.now() })
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