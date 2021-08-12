import { Button, Card, CardContent, makeStyles, CardActionArea, CardActions, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../../../store/cardSlice';
import UpdateRouteModal from './UpdateRouteModal';

export default function MyCard(props) {

  const {
    id,
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
    position:"relative",
    minHeight: "100%",
    height: 'auto',
    height: "100%"
  },
  media: {
    background: "rgb(2,0,36)",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 7%, rgba(22,13,13,0) 55%), url(https://picsum.photos/300/150)`,
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
  buttondel: {
    width: 120,
    fontSize: "10px",
    color: "white",
    backgroundColor: "rgb(185, 0, 0)",
    textShadow: "0px 1px 0px #8f8a64",
    '&:hover': {
      backgroundColor:"green"
    },
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



const handleDelete = (id) => {
  axios.delete("/routes", {data: {id:id}})
  .then((res) => {
    console.log(id);
    dispatch(deleteCard({ id: id }))
  });

}
  return (
    
<Card id={id} className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.media}>
              <div className={classes.media2}>
              <Typography>
              {title}
              </Typography>
              </div>
            </CardContent>
            <div className={classes.description}>
              <Typography >
              Локация: {address}
              </Typography>
              <Typography>
              Сложность маршрута: {difficulty} ⚡
              </Typography>
              <Typography>
              Рейтинг маршрута: {rating} ⭐
              </Typography>
              <Typography>
              Продолжительность - км: {length} 🐾
              </Typography>
            </div>
          </CardActionArea>
          <CardActions className={classes.actions}>
          <UpdateRouteModal id={id} key={id} lat={lat} lng={lng} title={title} difficulty={difficulty} rating={rating} address={address} length={length} description={description}/>
            <Button type="click" onClick={()=>handleDelete(id)} className={classes.buttondel}>
            Удалить
            </Button>
          </CardActions>
        </Card>
  );
}
