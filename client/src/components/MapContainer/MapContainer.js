import React, { useState, memo, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import "./style.module.css";
import MarkerModal from "./MarkerModal";
import { useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';//
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-scroll';
import Grid from '@material-ui/core/Grid';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({//
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));


const containerStyle = {
  width: "850px",
  height: "500px",
  borderRadius: '10px'
};

const defaultZoom = 10;
const defaultCenter = {
  lat: 43.44514365102102,
  lng: 41.73673191647548,
};

const defaultMarkerPosition = {
  lat: 43.44514365102102,
  lng: 41.73673191647548,
};

const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };
const options = { streetViewControl: false };

function MapContainer() {

  const classes = useStyles();//
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyApzvj3AYiAkv1Vr9x48zJ1NpK4DuqE-1M",
  });

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [markerPosition, setMarkerPosition] = useState(defaultMarkerPosition);
  const [markerVisibility, setMarkerVisibility] = useState(0);
  const [markersList, setMarkersList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const cards = useSelector(state => state.cards.cards);
  const [popOver, setPopOver] = useState('');
  useEffect(() => {
    setMarkersList(cards);
  }, [cards]);
  const allMarks = () => {

    if (cards.length) {


      const popover = (el) => {
        <MarkerModal key={el.id} open={open} handleClose={handleClose} title={el.title} difficulty={el.difficulty} rating={el.rating} address={el.address} length={el.length} description={el.description} />
      }
      const handleOpen = (el) => {
        setOpen(true);
        setPopOver(<MarkerModal key={el.id} open={open} handleClose={handleClose} title={el.title} difficulty={el.difficulty} rating={el.rating} address={el.address} length={el.length} description={el.description} />)
      };

      const handleClose = () => {
        setOpen(false);
        setPopOver('')
      }
      return cards.map((el) => (

        <Marker
          clickable={true}
          position={{
            lat: el.lat / 1,
            lng: el.lng / 1,
          }}
          title={el.title}
          onClick={() => handleOpen(el)}
        >
          {popover(el)}
        </Marker>
      ));
    }
    return null
  };

  return isLoaded ? (
    <div>
      <div>
        <div id="mapContainer" style={{
             height: '250px',
             backgroundImage: `url(http://localhost:3001/img/bg_2.jpg)`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
           }}>
        </div>
      </div>
    <div style={{
      marginTop: '2%',
      marginBottom: '1%',
      marginLeft: '20%',
    }}>
      <GoogleMap className={"mapcontainer"} 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        mapTypeId={"hybrid"}
      >
        {allMarks()}
      </GoogleMap>
      <Grid style={{
        position: 'absolute',
        top: '185%',
        left: '80%'
      }}>
        <Tooltip title="down" aria-label="add">
          <Fab color="primary" className={classes.fab}>
            <Link to="cardlist" smooth={true} duration={100}><ArrowDownwardIcon></ArrowDownwardIcon></Link>
          </Fab>
        </Tooltip>
      </Grid>
      <Grid style={{
        position: 'absolute',
        top: '155%',
        left: '80%'
      }}>
        <Tooltip title="up" aria-label="add">
          <Fab color="primary" className={classes.fab}>
            <Link to="header" smooth={true} duration={100}><ArrowUpwardIcon></ArrowUpwardIcon></Link>
          </Fab>
        </Tooltip>
      </Grid>
    </div>
    </div>
  ) : (
    <p>No map</p>
  );
}

export default memo(MapContainer);
