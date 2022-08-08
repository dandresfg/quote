import { Box, Grid } from "@mui/material"

import GoogleKeepLogo from '../../assets/keep-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import FirebaseLogo from '../../assets/firebase-logo.png';
import Form from "../components/form";

const Dashboard = () => {
    return (
        <div className="h-100 background">
            <Box py={5} component="header">
                <Grid item container alignItems="center" justifyContent="center">
                    <Box mx={2}><img src={GoogleKeepLogo} alt="Google Keep" width={35} /></Box>
                    <Box>+</Box>
                    <Box mx={2}><img src={ReactLogo} alt="React" width={45} /></Box>
                    <Box>+</Box>
                    <Box mx={2}><img src={FirebaseLogo} alt="Firebase" width={35} /></Box>
                </Grid>
            </Box>
            <Box component="div" p={1}>
                <Grid item container justifyContent="center">
                    <Form />
                </Grid>
            </Box>
        </div>
    )
}

export default Dashboard