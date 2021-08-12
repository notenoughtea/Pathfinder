import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {CardActions} from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function MarkerCard(props) {

  const {
    cardProps
  } = props
  console.log(cardProps);

  const classes = useStyles();
  return (

<Card className={classes.root}>
              <Link to={`/card/${cardProps.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <div style={{
                    background: "rgb(2,0,36)",
                    display: "flex",
                    // backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 2%, rgba(22,13,13,0) 35%), url(${server}${url})`,
                    backgroundSize: 'cover',
                    height: `35vh`,
                    borderRadius: '5px'
                  }}><div><Typography gutterBottom variant="h5" component="h2" style={{ color: 'white', marginTop: '30vh', marginLeft: '1vw' }}>
                    {cardProps.title}
                  </Typography></div></div>
                  <CardContent>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                     {cardProps.difficulty} ⚡  &nbsp; &nbsp; &nbsp; {cardProps.rating} ⭐  &nbsp; &nbsp; &nbsp; {cardProps.length} 🐾
              </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Oписание: &nbsp;{cardProps.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
  );
}
