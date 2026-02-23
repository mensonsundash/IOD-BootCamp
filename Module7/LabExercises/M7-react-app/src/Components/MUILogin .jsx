import { Button, Container, Paper, TextField, Typography } from "@mui/material";

function MUILogin () {

    return (
        <>
        <Container maxWidth="sm">
            <Paper elevation={4} sx={{ p: 4, mt:5 }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField fullWidth label="Email" type="email" margin="normal" />
                <TextField fullWidth label="Password" type="password" margin="normal" />

                <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
            </Paper>
        </Container>

        </>
    );
}

export default MUILogin;