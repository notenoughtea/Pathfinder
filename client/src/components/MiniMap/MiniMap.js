import React, { useState, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoBox } from "@react-google-maps/api";
import "./style.module.css"

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

const infoBoxOptions = { closeBoxURL: '', enableEventPropagation: true };
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


  const markerHandler = () => (setMarkerPosition)

  return isLoaded ? (
    <GoogleMap className={"mapcontainer"}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"satellite"}
      onClick={((e) => {
        return (
        setMarkerVisibility(1),
        setMarkerPosition({
        lng: e.latLng.lng(),
        lat: e.latLng.lat(),
        })
        )
      })}
      // options={options}
      
    >
    <button className="bn31"><span className="bn31span">Add route</span></button>

    <Marker
    onDrag={((e) => setMarkerPosition({
      lng: e.latLng.lng(),
      lat: e.latLng.lat(),
    }))}
    opacity={0.9}
    clickable={true}
    draggable={true}
    position={markerPosition}
    title={"Эскалибур"}
    >
    {/* <InfoBox
      position={markerPosition}
      options={infoBoxOptions}

    >
    <NotListedLocationIcon/>
    </InfoBox> */}
    </Marker>
    </GoogleMap>
  ) : (
    <p>No map</p>
  );
}

export default memo(MapContainer);
