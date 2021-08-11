import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import seal from './seal.png'
import "./profile.module.css"
import UpdateProfileModal from './UpdateProfileModal';

  const useStyles = makeStyles({
    root: {
      width: 700,
    },
    media: {
      height: 350,
    },
    seal:{
      height: 112,
      width: 126,
    },
  });

export default function Profile() {
  const classes = useStyles();
  const {
    email,
    firstName,
    lastName,
  } = localStorage;

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/500/800"
        title="header"
      />
      <CardContent>
        <h3 >
          {firstName}
        </h3>
        <br/>
        <h5 >
          {lastName}
          </h5>
          <br/>
        <h5 >
          {email}
          </h5>
          <br/>
      </CardContent>
      <CardMedia
        className={classes.seal}
        image={seal}
        title="header"
      />
    </CardActionArea>
    <CardActions>
    <UpdateProfileModal/>
    </CardActions>
  </Card>
  );
}


  


