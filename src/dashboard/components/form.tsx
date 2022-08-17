import { Grow, Box, Grid, InputProps, TextField } from "@mui/material"

import Container from './container';
import Buttons from './buttons';

import useNoteForm from "../../hooks/useNoteForm";
import TitleInput from "./title";
import DescriptionInput from "./description";

export const TextFieldProps: Partial<InputProps> = {
    disableUnderline: true,
}

const DashboardNoteForm = () => {
    const {
        state,
        focused,
        onFocus,
        onChangeColor,
        onTextChange,
        onFileChange,
        onFileClean,
        onFormSubmit
    } = useNoteForm();
    return (
        <Container id="dashboard-input-file" state={state} onFileChange={onFileChange} onFileClean={onFileClean}>
            <Grid component="form" item container onSubmit={onFormSubmit}>
                <Grid component={Box} mx={1} mt={1} item xs={12} container>
                    <Grow
                        in={focused}
                        style={{ transition: 'all .2s ease-in-out', transformOrigin: '0 0 0', height: focused ? 'auto' : 0 }}
                        timeout={1000}
                    >
                        <Grid item xs={12}>
                            <TitleInput value={state.title} onChange={onTextChange} />
                        </Grid>
                    </Grow>
                    <Grid item xs={12}>
                        <DescriptionInput value={state.description} onFocus={onFocus} onChange={onTextChange} />
                    </Grid>
                </Grid>
                <Buttons id="dashboard-input-file" state={state} onChangeColor={onChangeColor} />
            </Grid>
        </Container>
    )
}

export default DashboardNoteForm