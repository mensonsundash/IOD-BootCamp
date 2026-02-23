import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material"
import { NavLink } from "react-router-dom";

import "../../App.css"
function MUINavBar() {

    return (
        <>

        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* App Title */}
                    <Typography variant="h6" noWrap sx={{mx: 2}}>
                        LOGO
                    </Typography>
                    
                    {/* Naigation Buttons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap:4} }}>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, }} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, }} to="/bitcoinRates">
                            BitcoinRates
                        </Button>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, }} to="/bitcoinRatesCustom">
                            BitcoinRatesCustom
                        </Button>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, }} to="/bitcoinRatesReducer">
                            BitcoinRatesReducer
                        </Button>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, }} to="/emojiWithContext">
                            EmojiWithContext
                        </Button>
                        <Button color="inherit" component={NavLink} sx={{ my: 2, color: 'white', display: 'block',  "&.active,&:hover": {backgroundColor: "#ffffff",color: "#1976d2" }, "&:last-child": {"margin-left": "auto"} }} to="/login">
                            Login
                        </Button>
                    </Box>
                </Toolbar>    
            </Container>
        </AppBar>
        
        </>
    );
}

// Save as Components/Common/NavBar.jsx and render in App.jsx
// ABOVE <AppRoutes />

export default MUINavBar;