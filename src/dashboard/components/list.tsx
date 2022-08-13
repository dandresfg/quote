import { useContext } from "react";

import { Grid } from "@mui/material";
import { INote } from "../../common/types";
import { NotesContext } from "../../store/context";

import Note from './note';
import NoteSkeleton from "./skeleton";

const List = () => {
    const { notes, loading } = useContext(NotesContext)
    return (
        <Grid container>
            {
                loading ?
                    Array.from({ length: 12 }).map((_, key) => (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                            <NoteSkeleton />
                        </Grid>
                    ))
                :
                    notes.map((note: INote) => (
                        <Grid item xs={12} sm={6} md={3} key={note.id}>
                            <Note note={note} />
                        </Grid>
                    ))
            }
        </Grid>
    )
}

export default List