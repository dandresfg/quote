import { ChangeEvent } from "react"
import { Paper, Box } from "@mui/material"
import { ChildrenProps, INote } from "../../common/types"

interface IImageNote extends ChildrenProps {
    state: INote,
    onFileChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const ImageStyle = {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    border: '1px solid #d9d9d9',
    overflow: 'hidden'
}

const NoteContainer = (props: IImageNote) => {
    return (
        <Paper sx={{ width: '100%', position: 'relative', maxWidth: 550, border: `0.5px solid ${props.state.color || 'transparent'}` }}>
            <Box sx={{ position: 'absolute', zIndex: -1, color: 'transparent' }}>
                <input type="file" id="notefile" accept="image/*" onChange={props.onFileChange} />
            </Box>
            {
                props.state.image && (
                    <Box sx={ImageStyle}>
                        <img src={props.state.image} alt="Note image" width={50} height={50} />
                    </Box>
                )
            }
            {props.children}
        </Paper>
    )
}

export default NoteContainer