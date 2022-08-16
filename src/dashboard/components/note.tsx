import { Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserCredential } from "firebase/auth";
import useAuth from "../../auth/hooks/useAuth";
import { INote } from "../../common/types";

interface NoteProps {
    note: INote
}

const PaperBox = styled(Box)<NoteProps>(({theme, note}) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    height: 120,
    backgroundColor: 'white',
    borderRadius: 6,
    border: `2px solid ${note.color || "#e9e9e9"}`,
    transition: 'all .2s ease-in-out',
    '&: hover': {
        cursor: 'pointer',
        boxShadow: `0.5px 0.5px 1px 0.5px ${note.color || "#a0a0a0"}`
    }
}))

const Note = ({ note }: NoteProps) => {
    const user = useAuth() as UserCredential["user"];
    return (
        <PaperBox note={note}>
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
                    <Typography component="p">
                        <strong>{note.title}</strong>
                    </Typography>
                    <Typography component="p" noWrap>
                        {note.description}
                    </Typography>
                </Grid>
                {
                    // Show email if is not a note from yourself
                    (note.owner && note.owner.email !== user.email) ?
                        <Grid item container justifyContent="flex-end" alignItems="end" xs={12}>
                            <Typography component="small" variant="caption">
                                {note.owner?.email}
                            </Typography>
                        </Grid>
                    : null
                }
            </Grid>
        </PaperBox>
    )
}

export default Note