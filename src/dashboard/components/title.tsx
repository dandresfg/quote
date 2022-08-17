import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { TITLE_LIMIT } from '../../hooks/useNoteForm';
import { TextFieldProps } from './form';

interface ITitleInput {
    value: string,
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

function TitleInput({ value, onChange }: ITitleInput) {
    const error = value.length > TITLE_LIMIT
    return (
        <TextField
            required
            fullWidth
            name="title"
            variant="standard"
            placeholder="Título"
            value={value}
            error={error}
            helperText={error && `El título no debe exceder los ${TITLE_LIMIT} caracteres`}
            InputProps={TextFieldProps}
            onChange={onChange}
        />
    );
}

export default TitleInput