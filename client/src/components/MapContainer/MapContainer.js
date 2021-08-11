import React, { useState, memo, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import "./style.module.css";
import axios from "axios";
import MarkerModal from "./MarkerModal";
import { useSelector } from "react-redux";
import { Modal } from "@material-ui/core";

const containerStyle = {
  width: "500px",
  height: "500px",
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyApzvj3AYiAkv1Vr9x48zJ1NpK4DuqE-1M",
  });

  const [modal, setmodal] = useState('');
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [markerPosition, setMarkerPosition] = useState(defaultMarkerPosition);
  const [markerVisibility, setMarkerVisibility] = useState(0);
  const [markersList, setMarkersList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const cards = useSelector(state => state.cards.cards);

  // useEffect(() => {
  //   setMarkersList(cards);
  // }, [cards]);
  // console.log(markersList);
  const allMarks = () => {

    if (cards.length) {

      
      const modal = (el) => {
        <MarkerModal key={el.id} open={open} handleClose={handleClose} title={el.title} difficulty={el.difficulty} rating={el.rating} address={el.address} length={el.length} description={el.description}/>
      }
      const handleOpen = (el) => {
        setOpen(true);
        setmodal(<MarkerModal key={el.id} open={open} handleClose={handleClose} title={el.title} difficulty={el.difficulty} rating={el.rating} address={el.address} length={el.length} description={el.description}/>)
      };
    
      const handleClose = () => {
        setOpen(false);
        setmodal('')
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
          {/* {modal(el)} */}
        </Marker>
      ));
    }
    return null
  };
  
  return isLoaded ? (
<<<<<<< HEAD
    <GoogleMap className={"mapcontainer"} id="mapContainer"
=======
    <div>
    {modal}
    <GoogleMap
      className={"mapcontainer"}
>>>>>>> 16a245a1766c20b773daab25f059af2a235eda8e
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"hybrid"}
    >
      
      {allMarks()}
    </GoogleMap>
    </div>
  ) : (
    <p>No map</p>
  );
}

export default memo(MapContainer);
