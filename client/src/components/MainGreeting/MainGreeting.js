import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: "center",
      justify: "center"
  },
  button: {
    fontSize: 20,
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    alignItems: "center",
    fontSize: 30
  },
}));

export default function MainGreeting() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
    <Typography component="div"/>
    <div className={classes.root}>
        <div className={classes.text}>{"Find your path"}</div>
        <br/>
        <Button  className={classes.button} variant="outlined" color="primary">First step</Button>
    </div>
    </Container>
  );
}
