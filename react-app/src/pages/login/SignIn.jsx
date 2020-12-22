import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import blue from "@material-ui/core/colors/blue";
import Logo from "../../components/Logo";
import SignInForm from "./SignInForm";
import Copyright from "../../components/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: '100px',
    height: '100px',
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
  },
  icon: {
    fontSize: '3rem',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          < Logo />
          <Typography component="h1" variant="h5">
            Sign in!
          </Typography>
          < SignInForm/>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}
