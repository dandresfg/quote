import { useContext, useEffect, useRef } from 'react';
import { Button, Grid, Hidden, Typography } from '@mui/material';

import useGoogleAuth from '../hooks/useGoogleAuth';
import { AuthContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';

// Images
import BackgroundLogo from '../../assets/notes.webp'
import GoogleLogo from '../../assets/google-logo.png';
import ImageLogo from '../../assets/notes-logo.png';

const StartIcon = <img src={GoogleLogo} alt="Google logo" width={16} height={16} />;

const LoginPage = () => {
    const { user, loading } = useContext(AuthContext);
    const onSignIn = useGoogleAuth();
    const navigate = useNavigate();
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if(user && !loading){
            navigate('/');
        }
    }, [ user, loading ])

    // Fit image
    const onLoadImage = () => {
        if (!imageRef.current) return;
        const { width, height, parentElement } = imageRef.current;
        if (parentElement) {
            const lessThanParent = (width / height) > (parentElement.offsetWidth / parentElement.offsetHeight);
            imageRef.current.classList.add(lessThanParent ? "image-full-height" : "image-full-width");
            imageRef.current.classList.remove(lessThanParent ? "image-full-width" : "image-full-height");
        }
    }

    return (
        <Grid item container className="h-100">
            <Grid item container spacing={2} className="area" justifyContent="center" alignItems="center" xs={12} md={6}>
                <div>
                    <Grid item container className="h-100">
                        <Grid item container justifyContent="center">
                            <img src={ImageLogo} alt="Google Keep Clone" width={300} />
                        </Grid>
                        <Grid item container className="area-out" justifyContent="center">
                            <Typography variant="h2" align="center">
                                Save Your Notes!
                            </Typography>
                        </Grid>
                        <Grid item container className="area-out" justifyContent="center">
                            <Button
                                variant="outlined"
                                color="inherit"
                                startIcon={StartIcon}
                                sx={{ minWidth: 160 }}
                                disabled={loading}
                                onClick={onSignIn}
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <ul className="circles">
                    <li></li><li></li><li></li>
                    <li></li><li></li><li></li>
                    <li></li><li></li><li></li>
                    <li></li>
                </ul>
            </Grid>
            <Hidden mdDown>
                <Grid item container xs={12} md={6} sx={{ overflow: 'hidden', height: '100vh' }}>
                    <img
                        ref={imageRef}
                        src={BackgroundLogo}
                        height={"100%"}
                        alt="Background notes"
                        onLoad={onLoadImage}
                    />
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default LoginPage