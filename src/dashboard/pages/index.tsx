import { Box, Grid } from "@mui/material"

import Form from "../components/form";
import Header from "../components/header";

const Dashboard = () => {
    return (
        <div className="h-100 background">
            <Header />
            <Box component="div" p={1}>
                <Grid item container justifyContent="center">
                    <Form />
                </Grid>
            </Box>
        </div>
    )
}

export default Dashboard