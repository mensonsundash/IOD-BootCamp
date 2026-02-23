import { useState, useContext } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !password) {
      return alert("Fill all fields");
    }

   const result = signup(name, password);

    if (!result.success) {
      return alert(result.message);
    }

    navigate("/dashboard");
  };

   return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4">Create Account</Typography>

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
          onClick={handleSignup}
        >
          Signup
        </Button>

        <Typography sx={{ mt: 2 }}>
          Already have account? <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Signup;
