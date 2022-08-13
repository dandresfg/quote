import { Box, Container, Grid } from "@mui/material"

import List from "../components/list";
import Form from "../components/form";
import Header from "../components/header";

const Dashboard = () => {
    return (
        <Container maxWidth="lg" className="h-100">
            <Header />
            <Box component="div" p={1}>
                <Grid item container justifyContent="center">
                    <Form />
                </Grid>
            </Box>
            <Box component="div" p={1} mt={4}>
                <List />
            </Box>
        </Container>
    )
}

export default Dashboard