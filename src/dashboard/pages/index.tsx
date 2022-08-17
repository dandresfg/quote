import { Box, Container, Grid } from "@mui/material"

import List from "../components/list";
import Form from "../components/form";
import Header from "../components/header";
import Modal from "../components/modal"
import User from "../components/user"

const Dashboard = () => {
    return (
        <Container maxWidth="lg" className="h-100">
            <Header />
            <Box component="div" p={1}>
                <Grid item container justifyContent="center">
                    <Grid item xs={12}>
                        <User />
                    </Grid>
                    <Form />
                </Grid>
            </Box>
            <Box component="div" p={1} mt={4}>
                <List />
            </Box>
            <Modal />
        </Container>
    )
}

export default Dashboard