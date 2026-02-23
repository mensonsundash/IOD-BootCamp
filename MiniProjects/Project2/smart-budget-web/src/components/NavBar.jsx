import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle logout and redirect
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* App Logo / Title */}
          <Typography variant="h6" sx={{ mx: 2 }}>
            SmartBudget
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: "flex", gap: 3 }}>

            {/* Dashboard only visible if logged in */}
            {user && (
              <Button
                component={NavLink}
                to="/dashboard"
                sx={navButtonStyle}
              >
                Dashboard
              </Button>
            )}

            {/* Admin only visible if role is admin */}
            {user?.role === "admin" && (
              <Button
                component={NavLink}
                to="/admin"
                sx={navButtonStyle}
              >
                Admin
              </Button>
            )}
          </Box>

          {/* Right side auth buttons */}
          <Box>

            {!user ? (
              <Button
                component={NavLink}
                to="/login"
                sx={navButtonStyle}
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                sx={navButtonStyle}
              >
                Logout
              </Button>
            )}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

// Reusable button style
const navButtonStyle = {
  color: "white",
  "&.active, &:hover": {
    backgroundColor: "#ffffff",
    color: "#1976d2",
  },
};

export default NavBar;