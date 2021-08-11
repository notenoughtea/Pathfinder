import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom'
import { server } from '../../constants';
import Title from './Title/Title';
import style from "./style.module.css"
import { Card, Badge } from 'react-bootstrap'
import { Rating } from "@material-ui/lab";
import Weather from './Weather/Weather';
import Description from './Description/Description';
import TabPanel from './Tabs/Tabs';

function OneCard() {
  const { id } = useParams();

  const [one, setOne] = useState("");

  
  useEffect(() => {
    axios.post('/one', { id })
    .then(res => setOne(res.data));
  }, [])

  const { url, title, difficulty, rating, address, length, lng, lat } = one;

  return (

    <div  className={style.title}>
      <Title card={one} img={`${server}${one.url}`}/>
      <div className={style.blog} >
        <Description data={one}/>
      <Weather  lng={lng} lat={lat} title={title} ></Weather>
      <TabPanel />
        </div>
      
    </div>
  )
}
export default OneCard;
