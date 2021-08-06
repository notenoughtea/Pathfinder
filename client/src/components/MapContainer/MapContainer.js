import React, { useState, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoBox } from "@react-google-maps/api";
import "./style.module.css"

console.log(Marker);

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const defaultZoom = 16;
const defaultCenter = {
  lng: 37.6153107,
  lat: 55.7520233,
};

const defaultMarkerPosition={
  lng: 37.6153107,
  lat: 55.7520233,
}

const options = { closeBoxURL: '', enableEventPropagation: true };

function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyApzvj3AYiAkv1Vr9x48zJ1NpK4DuqE-1M",
  });

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [markerPosition, setMarkerPosition] = useState(defaultMarkerPosition);

  const markerHandler = () => (setMarkerPosition)

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"satellite"}
    >
    
    <Marker
    onDrag={((e) => console.log(e.latLng.lat()))}
    opacity={0.9}
    clickable={true}
    draggable={true}
    position={markerPosition}
    title={"Эскалибур"}
    >
    <InfoBox
    opacity={0.1}
    clickable={true}
    draggable={true}
    position={markerPosition}
    >
    <div >
    <h1>InfoBox</h1>
    <img src="https://picsum.photos/50/100" alt="Descriptioin of image"/>
    </div>
    </InfoBox>
    </Marker>
    </GoogleMap>
  ) : (
    <p>No map</p>
  );
}

export default memo(MapContainer);
