import { Box, Button, Grid, IconButton, InputProps, TextField, Tooltip } from "@mui/material"

// Icons
import PaletteIcon from '@mui/icons-material/Palette';
import ImageIcon from '@mui/icons-material/Image';

import Container from './container';
import ColorPicker from "../../common/components/colorpicker";

import useNoteForm from "../../hooks/useNoteForm";

const TextFieldProps: Partial<InputProps> = {
    disableUnderline: true,
}

const DashboardNoteForm = () => {
    const {
        state,
        focused,
        onFocus,
        onChangeColor,
        onCleanColor,
        onTextChange,
        onFileChange,
        onFormSubmit
    } = useNoteForm();
    return (
        <Container state={state} onFileChange={onFileChange}>
            <Grid component="form" item container spacing={2} onSubmit={onFormSubmit}>
                <Grid item container>
                    <Box px={2} pt={1}>
                        {focused &&
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="title"
                                    variant="standard"
                                    placeholder="Título"
                                    value={state.title}
                                    InputProps={TextFieldProps}
                                    onChange={onTextChange}
                                />
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                variant="standard"
                                name="description"
                                placeholder={`Agrega una nota`}
                                minRows={4}
                                value={state.description}
                                onFocus={onFocus}
                                InputProps={TextFieldProps}
                                onChange={onTextChange}
                            />
                        </Grid>
                    </Box>
                </Grid>
                {
                    state.color && (
                        <Grid item container xs={3}>
                            <Tooltip arrow title="Eliminar color" placement="bottom">
                                <Box className="pointer" pl={2} sx={{ color: '#989898' }} onClick={onCleanColor}>
                                    {state.color}
                                </Box>
                            </Tooltip>
                        </Grid>
                    )
                }
                <Grid item container xs justifyContent="flex-end">
                    <Grid item>
                        <ColorPicker color={state.color} onChange={onChangeColor}>
                            <Tooltip arrow title="Elegir un color" placement="bottom">
                                <IconButton sx={state.color ? { color: state.color } : undefined}>
                                    <PaletteIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </ColorPicker>
                    </Grid>
                    <Grid item>
                        <Tooltip arrow title="Agregar una imagen" placement="bottom">
                            <IconButton component="label" htmlFor="notefile">
                                <ImageIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Button type="submit" color="inherit" variant="text">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashboardNoteForm