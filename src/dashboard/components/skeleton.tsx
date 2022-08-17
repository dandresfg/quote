import { Grid, Paper, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";

const PaperBox = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1),
}))

const NoteSkeleton = () => {
    return (
        <PaperBox elevation={0}>
            <Grid container className="h-100">
                <div className="d-image">
                    <Skeleton variant="circular" width={50} height={50} />
                </div>
                <Grid item xs>
                    <Skeleton variant="text" width={"100%"} />
                    <Skeleton variant="text" width={"100%"} />
                    <Skeleton variant="text" width={"100%"} />
                </Grid>
            </Grid>
        </PaperBox>
    )
}

export default NoteSkeleton