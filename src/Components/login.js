import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
  Grid,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";

import useStyles from "./stylesLogin";
import SignupPage from "./signUp"; // Import the SignupPage component

const LoginPage = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.outerContainer}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
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
                Log In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Link to="/signUp" color="primary">
                <Button>Don't have an account? Sign Up</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
