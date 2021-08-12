import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyCard from './MyCard';
import AddRouteModal from './AddRouteModal';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RoutesContainer() {
  const cards = useSelector(state => state.cards.cards);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AddRouteModal />
        {cards.map((card) => <MyCard url={card.url} lat={card.lat} lng={card.lng} id={card.id} key={card.id} title={card.title} difficulty={card.difficulty} rating={card.rating} address={card.address} length={card.length} description={card.description} />)}
    </div>
  );
}






