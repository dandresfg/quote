import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { TextFieldProps } from './form';

interface IDescriptionInput {
    value: string,
    onFocus?: () => void,
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

function DescriptionInput({ value, onFocus, onChange }: IDescriptionInput) {
    return (
        <TextField
            fullWidth
            multiline
            variant="standard"
            name="description"
            placeholder="Agrega una nota"
            minRows={4}
            value={value}
            onFocus={onFocus}
            onChange={onChange}
            InputProps={TextFieldProps}
        />
    );
}

export default DescriptionInput