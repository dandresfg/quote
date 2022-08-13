import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { INote } from "../../common/types";

interface NoteProps {
    note: INote
}

const PaperBox = styled(Box)<NoteProps>(({theme, note}) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    height: 100,
    border: `1px solid ${note.color || "#e9e9e9"}`,
    '&: hover': {
        cursor: 'pointer',
        boxShadow: `0px 1px 1px 1px ${note.color || "#a9a9a9"}`
    }
}))

const Note = ({ note }: NoteProps) => {
    return (
        <PaperBox note={note} component={Paper}>
            <Grid container className="h-100">
                {
                    note.image.url && (
                        <div className="d-image">
                            <img
                                src={note.image.url}
                                alt={`Image note ${note.id}`}
                                width="auto"
                                height={50}
                            />
                        </div>
                    )
                }
                <Grid item xs>
                    <p><strong>{note.title}</strong></p>
                    <p>{note.description}</p>
                </Grid>
            </Grid>
        </PaperBox>
    )
}

export default Note