import { ChangeEvent } from "react"
import { Paper, Box, Tooltip } from "@mui/material"
import { ChildrenProps, INote } from "../../common/types"

interface IImageNote extends ChildrenProps {
    state: INote,
    id: string,
    onFileChange: (evt: ChangeEvent<HTMLInputElement>) => void
    onFileClean: () => void
}

const ImageStyle = {
    border: '1px solid #d9d9d9',
    position: 'absolute',
    right: 10,
    top: 10,
}

const NoteContainer = ({ state, id, children, onFileChange, onFileClean }: IImageNote) => {
    return (
        <Paper sx={{ width: '100%', position: 'relative', maxWidth: 550, border: `0.5px solid ${state.color || 'transparent'}` }}>
            <input type="file" id={id} accept="image/*" style={{ display: 'none' }} onChange={onFileChange} />
            {
                state.image.url && (
                    <Tooltip arrow placement="bottom" title="Eliminar imagen">
                        <Box className="d-image" sx={ImageStyle} onClick={onFileClean}>
                            <img src={state.image.url} alt="Note image" width="auto" height={50} />
                        </Box>
                    </Tooltip>
                )
            }
            {children}
        </Paper>
    )
}

export default NoteContainer