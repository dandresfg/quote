import { Box, Grid } from "@mui/material"

import GoogleKeepLogo from '../../assets/keep-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import FirebaseLogo from '../../assets/firebase-logo.png';

const Header = () => {
    return (
        <Box py={3} component="header">
            <Grid item container alignItems="center" justifyContent="center">
                <Box mx={2}><img src={GoogleKeepLogo} alt="Google Keep" width={35} /></Box>
                <Box>+</Box>
                <Box mx={2}><img src={ReactLogo} alt="React" width={45} /></Box>
                <Box>+</Box>
                <Box mx={2}><img src={FirebaseLogo} alt="Firebase" width={35} /></Box>
            </Grid>
        </Box>
    )
}

export default Header