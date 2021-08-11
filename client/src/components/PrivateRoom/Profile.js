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

  const useStyles = makeStyles({
    root: {
      width: 700,
    },
    media: {
      height: 350,
    },
  });

export default function Profile() {
  const cards = useSelector(state => state.cards.cards);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/500/800"
        title="header"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          ФИО
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Описание профиля
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Редактировать
      </Button>
    </CardActions>
  </Card>
  );
}


  


