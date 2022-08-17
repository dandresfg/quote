import { FormEvent, useContext, useEffect, ChangeEvent } from 'react';
import { Grid, Backdrop, Box, Modal, Fade } from '@mui/material';
import useNoteForm from '../../hooks/useNoteForm';
import { NotesContext } from '../../store/context';
import Container from './container';
import Buttons from './buttons';
import TitleInput from './title';
import DescriptionInput from './description';

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 1
};

function NoteModal() {
    const { editable, onSelectNote } = useContext(NotesContext);
    const {
        state,
        onStateChange,
        onChangeColor,
        onTextChange,
        onFileChange,
        onFileClean,
        onFormSubmit
    } = useNoteForm(true);

    useEffect(() => {
        if(editable){
            onStateChange(editable)
        }
    }, [ editable ])

    const onSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
        onFormSubmit(evt)
        handleClose();
    }

    const handleClose = () => {
        onSelectNote();
        onStateChange()
    }
    
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={!!editable}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={!!editable}>
                <Box component="form" sx={style} onSubmit={onSubmit}>
                    <Container id="modal-input-file" state={state} onFileChange={onFileChange} onFileClean={onFileClean}>
                        <Grid container sx={{ padding: 1 }}>
                            <Grid item xs={12} sx={{ marginBottom: 1 }}>
                                <TitleInput value={state.title} onChange={onTextChange} />
                            </Grid>
                            <DescriptionInput value={state.description} onChange={onTextChange} />
                            <Buttons id="modal-input-file" state={state} onChangeColor={onChangeColor} />
                        </Grid>
                    </Container>
                </Box>
            </Fade>
        </Modal>
    );
}

export default NoteModal