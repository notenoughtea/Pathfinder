import React from "react";
import { Image, Card } from "react-bootstrap";
import style from "./style.module.css";
import { Button, Badge} from "react-bootstrap";
import { Rating } from "@material-ui/lab";
import { server } from "../../../constants";

export default function Title({ card }) {

  console.log(card);

  const { url, title, difficulty, rating, address } = card;

  

  return (
    <div >
      <Card style={{border: 'none'}} className="text-white">
        <div className={style.shadow}></div>
        <Card.Img
          className={style.img}
          src={`${server}${url}`}
          alt="Card image"
        />
        <Card.ImgOverlay className={style.overlay}>
          <Card.Title>{title}</Card.Title>
          <div className={style.diff}>
          
          
          </div>
          <Card.Text>{address}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
