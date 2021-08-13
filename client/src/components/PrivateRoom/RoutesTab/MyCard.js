import { Button, Card, CardContent, makeStyles, CardActionArea, CardActions, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../../../store/cardSlice';
import UpdateRouteModal from './UpdateRouteModal';
import { server } from "../../../constants";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { Badge } from "react-bootstrap";

export default function MyCard(props) {

  const {
    id,
    url,
    title,
    difficulty,
    rating,
    address,
    length,
    description,
    lat,
    lng
  } = props


  const useStyles = makeStyles({
    root: {
      width: 300,
      height: 400,
      position: "relative",
      minHeight: "100%",
      height: 'auto',
      height: "100%",
      marginLeft: '70vh',
      marginBottom: "3vh",
      transition: 'all 0.5s ease',
      '&:hover': {
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        transform: 'scale(1.1)',
      },
    },
    media: {
      background: "rgb(2,0,36)",
      display: "flex",
      justifyContent: "center",
      backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 7%, rgba(22,13,13,0) 55%), url(${server}${url})`,
      backgroundSize: 'cover',
      width: 300,
      height: 150,

    },
    media2: {
      fontFamily: "Georgia, serif",
      fontSize: "20px",
      color: "white",
      displayDirection: "column",
      justifyContent: "center",
      marginTop: "36%"
    },
    actions: {
      display: "flex",
      justifyContent: "center"
    }
  });

  const classes = useStyles();
  const [idState, setId] = React.useState(0);

  const cards = useSelector(state => state.cards.cards);
  const dispatch = useDispatch()

  let variant, text;

  if (difficulty < 4) {
    variant = "green";
    text = "eazy";
  } else if (difficulty < 7) {
    variant = "lightblue";
    text = "средний";
  } else {
    variant = "red";
    text = "тяжелый";
  }

  const handleDelete = (id) => {
    axios.delete("/routes", { data: { id: id } })
      .then((res) => {
        console.log(id);
        dispatch(deleteCard({ id: id }))
      });
  }
  return (

    <Card id={id} className={classes.root}>
      <Link to={`/card/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardContent className={classes.media}>
            <div className={classes.media2}>
              <Typography>
                {title}
              </Typography>
            </div>
          </CardContent>
          <CardContent>
            <div
              style={{

                display: "flex",
                justifyContent: "space-between",
                maxWidth: "95%",
                padding: '10px',
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
              <Badge
                style={{ backgroundColor: `${variant}`, marginLeft: "20px" }}
              >
                {text}
              </Badge>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              &nbsp;{description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <UpdateRouteModal id={id} key={id} lat={lat} lng={lng} title={title} difficulty={difficulty} rating={rating} address={address} length={length} description={description} />
          <Button type="click" onClick={() => handleDelete(id)} variant="outlined" color="secondary" size="small">
            Удалить
            </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
