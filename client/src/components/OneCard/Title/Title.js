import React from "react";
import { Image, Card } from "react-bootstrap";
import style from "./style.module.css";
import { Button, Badge } from "react-bootstrap";
import { Rating } from "@material-ui/lab";
import { server } from "../../../constants";

export default function Title({ card }) {

  console.log(card);

  const { url, title, difficulty, rating, address } = card;

  return (
    <div >
      <Card style={{ border: 'none' }} className="text-white">
        
        {/* <Card.Img
          className={style.img}
          src={`${server}${url}`}
          alt="Card image"
        /> */}
        <div style={{
          background: "rgb(2,0,36)",
          display: "flex",
          backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 2%, rgba(22,13,13,0) 35%), url(${server}${url})`,
          backgroundSize: 'cover',
          height: `60vh`,
          borderRadius: '5px'
        }}><div className={style.shadow}><Card.Title>{title}</Card.Title><Card.Text>{address}</Card.Text></div></div>
        {/* <Card.ImgOverlay className={style.overlay}>
          <Card.Title>{title}</Card.Title>
          <div className={style.diff}>
          </div>
          <Card.Text>{address}</Card.Text>
        </Card.ImgOverlay> */}
      </Card>
    </div>
  );
}
