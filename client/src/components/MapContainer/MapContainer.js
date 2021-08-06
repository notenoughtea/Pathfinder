import React, { useState, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const defaultZoom = 16;
const defaultCenter = {
  lng: 37.6153107,
  lat: 55.7520233,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyApzvj3AYiAkv1Vr9x48zJ1NpK4DuqE-1M",
  });

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"satellite"}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* <></> */}
    </GoogleMap>
  ) : (
    <p>No map</p>
  );
}

export default memo(MyComponent);
