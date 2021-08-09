import React, { useState, memo, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import "./style.module.css";
import axios from "axios";
import MarkerModal from "./MarkerModal";

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

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [markerPosition, setMarkerPosition] = useState(defaultMarkerPosition);
  const [markerVisibility, setMarkerVisibility] = useState(0);
  const [markersList, setMarkersList] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get("/routes").then(({ data }) => {
      setMarkersList(data);
    });
  }, []);

  const allMarks = () => {
    if (markersList.length) {

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }
      return markersList.map((el) => (
        <Marker
          clickable={true}
          position={{
            lat: el.lat / 1,
            lng: el.lng / 1,
          }}
          title={el.title}
          onClick={() => handleOpen()}
        >
      <MarkerModal open={open} handleClose={handleClose} title={el.title} difficulty={el.difficulty} rating={el.rating} address={el.address} length={el.length} description={el.description}/>
        </Marker>
      ));
    }
    return null
  };
  
  return isLoaded ? (
    <GoogleMap
      className={"mapcontainer"}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"satellite"}
      onClick={(e) => {
        return (
          setMarkerVisibility(1),
          setMarkerPosition({
            lng: e.latLng.lng(),
            lat: e.latLng.lat(),
          })
        );
      }}
      // options={options}
    >
      <button className="bn31">
        <span className="bn31span">Add route</span>
      </button>
      {allMarks()}
    </GoogleMap>
  ) : (
    <p>No map</p>
  );
}

export default memo(MapContainer);
