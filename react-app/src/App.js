import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import blue from "@material-ui/core/colors/blue";
import Logo from "./components/Logo";
import Copyright from "./components/Copyright";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";
import PersonAddIcon from '@material-ui/icons/PersonAdd';



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

// export default function Register(){
//   const classes = useStyles();
//   return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           < Logo />
//           <Avatar className={classes.avatar}>
//             <PersonAddIcon className={classes.icon}/>
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up!
//           </Typography>
//           < RegisterForm/>
//         </div>
//         <Box mt={8}>
//           <Copyright />
//         </Box>
//       </Container>
//   );
// }

export default function SignIn() {
  const classes = useStyles();
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          < Logo />
          <Avatar className={classes.avatar}>
            <SentimentSatisfiedAltIcon className={classes.icon}/>
          </Avatar>
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
