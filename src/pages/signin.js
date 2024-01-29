import React, {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "./../components/Layout/Layout";


export default function SignIn() {

  // State variables for user information
  const [accessToken, setAccessToken] = useState(null); // Add this line
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const result = await axios.post("http://localhost:7000/api/users/login", {
        identifier: data.get("email"),
        password: data.get("password"),
      });

      console.log(result);

      if (result.data && result.data.error) {
        alert(`Login failed: ${result.data.error}`);
      } else {
        // Store the access token in state
        setAccessToken(result.data.accessToken);
        alert("Logged in successfully!");
        // Redirect or perform any other actions on successful login
        // For example, redirecting to the home page
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        console.log(error.response.data);
      }
      alert("Login failed. Please try again.");
    }
  };

    // You can use 'accessToken' wherever you need it in your component
    console.log("Access Token:", accessToken);

  return (
    <Layout>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 5,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="bold">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email or Phone"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup"
              href="#" 
              variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </Layout>
  );
}

