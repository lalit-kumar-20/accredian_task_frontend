import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Alert,
} from "@mui/material";

import useStyles from "./stylesSignup";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup =  (event) => {
    event.preventDefault();
    console.log(values);
          axios.post("http://localhost:5001/signUp", values)
    .then(res=>{{
      console.log(res);
      setSuccessMessage("Account created successfully!");
      setErrorMessage(""); // Reset error message if it was set before
    }})

      
    .then(err=> {
      setSuccessMessage(""); // Reset success message if it was set before
      setErrorMessage("Email is already Registered."); // Set error message
      console.error("Error during signup:", err); // Log the error for debugging
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.outerContainer}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSignup}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            autoFocus
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm password"
            label="Confirm Password"
            type="password"
            id="confirm password"
            onChange={(e) =>
              setValues({ ...values, confirmpassword: e.target.value })
            }
            // autoComplete="current-password"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                 Sign Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Link to="/" color="primary">
                <Button> have an account? Log In</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
        {successMessage && (
          <Alert severity="success" className={classes.alert}>
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error" className={classes.alert}>
            {errorMessage}
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default SignUpPage;
