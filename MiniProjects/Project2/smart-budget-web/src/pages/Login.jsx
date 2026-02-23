import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !password) {
      return alert("Fill all fields");
    }


    // Assing amin role if name is "admin"
    const role = name.toLowerCase() === "admin" ? "admin" : "user";

    const result = login(name, password);
    if (!result.success) {
      return alert(result.message);
    }

    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4">Login</Typography>

        <TextField
          fullWidth
          label="Username"
          sx={{ mt: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          sx={{ mt: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2 }}>
          No account? <Link to="/signup">Signup</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
