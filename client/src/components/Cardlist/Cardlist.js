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
import { Link } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { server } from '../../constants';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Cardlist() {
  const classes = useStyles();
  const cards = useSelector(state => state.cards.cards);

  return (
    <div className="carouselContainer">
    <Carousel responsive={responsive}>
      {cards.map((item) => (
        <div className="cardOne" key={item.id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={`${server}${item.url}`}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {item.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              Сложность маршрута: {item.difficulty} ⚡
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              Рейтинг маршрута: {item.rating} ⭐
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              Продолжительность - км: {item.length} 🐾
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              Адрес: {item.address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Краткое описание: {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Поделиться
        </Button>
            <Button size="small" color="primary">
            <Link to={`/card/${item.id}`}>Подробнее</Link>
        </Button>
          </CardActions>
        </Card>
        </div>
      ))}
    </Carousel>
    </div>
  );
}
