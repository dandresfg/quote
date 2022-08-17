import { useContext } from "react";
import { Face } from "@mui/icons-material";
import { Grid, Stack, Chip, Tooltip } from "@mui/material";

import { AuthContext } from "../../auth/hooks/context";

const User = ()  => {
    const { user, onDestroySession } = useContext(AuthContext)
    return (
        <Grid container justifyContent="center">
            <Stack direction="row" sx={{ marginBottom: 3 }}>
                <Tooltip arrow placement="bottom" title="Cerrar Sesión">
                    <Chip
                        icon={<Face />}
                        color="secondary"
                        label={user?.displayName || "Usuario"}
                        variant="outlined"
                        onClick={onDestroySession}
                    />
                </Tooltip>
            </Stack>
        </Grid>
    );
}

export default User