import { Typography, Grid, Paper, Box, Badge, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserCredential } from "firebase/auth";
import useAuth from "../../auth/hooks/useAuth";
import { INote } from "../../common/types";

interface PaperProps {
    note: INote
}
interface NoteProps extends PaperProps {
    loading: boolean,
    onSelect: (n: INote) => void
}

const PaperBox = styled(Paper)<PaperProps>(({theme, note}) => ({
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0
    },
    padding: theme.spacing(1),
    height: 140,
    backgroundColor: 'white',
    borderRadius: 6,
    border: `2px solid ${note.color || "transparent"}`,
    transition: 'all .2s ease-in-out',
    '&: hover': {
        cursor: 'pointer',
    }
}))

const Note = ({ note, loading, onSelect }: NoteProps) => {
    const user = useAuth() as UserCredential["user"];
    const onClick = () => onSelect(note);
    return (
        <PaperBox note={note} onClick={onClick}>
            <Grid container className="h-100">
                {
                    note.image.url && (
                        <Box className="d-image" sx={{ margin: 'auto', marginRight: '10px' }}>
                            <img
                                src={note.image.url}
                                alt={`Image note ${note.id}`}
                                width="auto"
                                height={50}
                            />
                        </Box>
                    )
                }
                <Grid item xs>
                    <Typography component="p" noWrap>
                        { loading ? <Skeleton variant="text" width={"100%"} /> : <strong>{note.title}</strong> }
                    </Typography>
                    <Box component="p" overflow="hidden" height={70}>
                        {loading ? <Skeleton variant="text" width={"100%"} /> : note.description}
                    </Box>
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