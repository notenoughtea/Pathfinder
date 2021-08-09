import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link to="/"  color="inherit">
        Home
      </Link>
      <Link to="/signup"  color="inherit">
        SignUp
      </Link>
      <Link to="/signin"  color="inherit">
        SignIn
      </Link>
      <Link to="/lk"  color="inherit">
        Profile
      </Link>
    </Typography>
  );
}
