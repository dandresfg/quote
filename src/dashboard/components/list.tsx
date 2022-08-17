import { useContext } from "react";

import { Divider, Grid } from "@mui/material";
import { INote } from "../../common/types";
import { NotesContext } from "../../store/context";

import Note from './note';
import NoteSkeleton from "./skeleton";

const List = () => {
    const { notes, noteLoading, loading, onSelectNote } = useContext(NotesContext)
    return (
        <Grid container>
            <Grid item xs={12} sx={{ paddingBottom: 2 }}>
                <Divider light />
            </Grid>
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
                            <Note loading={note.id === noteLoading} note={note} onSelect={onSelectNote} />
                        </Grid>
                    ))
            }
        </Grid>
    )
}

export default List