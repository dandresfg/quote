import { Box, Button, Grid, IconButton, Tooltip } from "@mui/material"

// Icons
import PaletteIcon from '@mui/icons-material/Palette';
import ImageIcon from '@mui/icons-material/Image';
import ColorPicker from "../../common/components/colorpicker";
import { INote } from "../../common/types";
import { TITLE_LIMIT } from "../../hooks/useNoteForm";

interface INoteButtons {
    state: INote,
    id: string,
    onChangeColor: (hex: string) => void
}

const NoteFooterButtons = ({ state, id, onChangeColor }: INoteButtons) => {
    const onCleanColor = () => onChangeColor('')
    const disabled = state.title.length > TITLE_LIMIT
    return (
        <>
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
                        <IconButton component="label" htmlFor={id}>
                            <ImageIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Button type="submit" color="inherit" variant="text" disabled={disabled}>
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default NoteFooterButtons