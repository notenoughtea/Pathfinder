import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    title,
    difficulty,
    rating,
    address,
    length,
    description
  } = props

  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={address}
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/500/800"
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        description: {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       difficulty: {difficulty}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       rating: {rating}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       length: {length}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
