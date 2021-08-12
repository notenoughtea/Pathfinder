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
import CardRoutes from './Card/Card';

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


export default function Cardlist() {
  
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
          height: '270px',
          backgroundImage: `url(${server}${bg.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>}
      </div>
      <Carousel className="carouselContainer" responsive={responsive}>
        {cards.map((item) => (
          <CardRoutes item={item}/>
        ))}
      </Carousel>
      <UpBtn></UpBtn>
    </div>
  );
}
