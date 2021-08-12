import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { server } from '../../constants';
import UpBtn from '../UpBtn/UpBtn';

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

  console.log(cards);

  const [bg, setBg] = useState(null);
  useEffect(() => {
    axios.post('/background')
      .then(res => setBg(res.data));
  }, [])


  return (
    <div id="cardlist">
      <div>
        {bg && <div className="bg" style={{
          height: '285px',
          backgroundImage: `url(${server}${bg.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>}
      </div>
      <Carousel className="carouselContainer" responsive={responsive}>
        {cards.map((item) => (
          <div className="cardOne" key={item.id}>
            <Card className={classes.root}>
              <Link to={`/card/${item.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <div style={{
                    background: "rgb(2,0,36)",
                    display: "flex",
                    backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 2%, rgba(22,13,13,0) 35%), url(${server}${item.url})`,
                    backgroundSize: 'cover',
                    height: `35vh`,
                    borderRadius: '5px'
                  }}><div><Typography gutterBottom variant="h5" component="h2" style={{ color: 'white', marginTop: '30vh', marginLeft: '1vw' }}>
                    {item.title}
                  </Typography></div></div>
                  <CardContent>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                     {item.difficulty} ⚡  &nbsp; &nbsp; &nbsp; {item.rating} ⭐  &nbsp; &nbsp; &nbsp; {item.length} 🐾
              </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Oписание: &nbsp;{item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        ))}
      </Carousel>
      <UpBtn></UpBtn>
    </div>
  );
}
