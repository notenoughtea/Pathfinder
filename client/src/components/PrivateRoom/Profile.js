import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import seal from './seal.png'
import "./profile.module.css"

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
  const auth = useSelector(state => state.auth);
  const classes = useStyles();
  console.log("user", auth);

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
          Стэн
          {/* {firstname} */}
        </h3>
        <br/>
        <h5 >
          Бульбазарович
          {/* {lastname} */}
          </h5>
          <br/>
        <h5 >
          shantaram@mail.ru
          {/* {email} */}
          </h5>
          <br/>
        <h5 >
          13.13.1313
          {/* {date} */}
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
      <Button size="small" color="primary">
          Редактировать
      </Button>
    </CardActions>
  </Card>
  );
}


  


