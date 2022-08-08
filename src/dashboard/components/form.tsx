import { useState } from "react"
import { Box, Button, Grid, IconButton, Paper, TextField, Tooltip } from "@mui/material"

// Icons
import PaletteIcon from '@mui/icons-material/Palette';
import ImageIcon from '@mui/icons-material/Image';
import ClassIcon from '@mui/icons-material/Class';
import LabelIcon from '@mui/icons-material/Label';

import { INote } from "../../common/types"
import ColorPicker from "../../common/components/colorpicker";

const defaultState = {
    title: '',
    description: '',
    image: '',
    color: ''
}

const DashboardForm = () => {
    const [state, setState] = useState<INote>(defaultState)
    const [focused, setFocused] = useState(false)

    const onChangeColor = (hex: string) => {
        setState(oldState => ({ ...oldState, color: hex }))
    }
    const onCleanColor = () => {
        setState(oldState => ({ ...oldState, color: "" }))
    }
    const onFocus = () => setFocused(true);

    return (
        <Paper sx={{ width: '100%', maxWidth: 550 }}>
            <Grid item container spacing={2}>
                <Grid item container>
                    <Box px={2} pt={1}>
                        {focused &&
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    placeholder="Título"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                placeholder={`Agrega una nota color ${state.color}`}
                                multiline
                                minRows={4}
                                onFocus={onFocus}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        </Grid>
                    </Box>
                </Grid>
                {
                    state.color && (
                        <Grid item container xs={3}>
                            <Box pl={2}>
                                <Tooltip arrow title="Eliminar el color" placement="bottom">
                                    <IconButton size="small" sx={{ color: state.color }} onClick={onCleanColor}>
                                        <LabelIcon color="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                    )
                }
                <Grid item container xs justifyContent="flex-end">
                    <ColorPicker color={state.color} onChange={onChangeColor}>
                        <Tooltip arrow title="Elegir un color" placement="bottom">
                            <IconButton size="small">
                                <PaletteIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </ColorPicker>
                    <Tooltip arrow title="Agregar una imagen" placement="bottom">
                        <IconButton size="small">
                            <ImageIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Button
                        color="inherit"
                        variant="text"
                        size="small"
                    >
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DashboardForm