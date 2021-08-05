import React from 'react'
import {GoogleMap} from '@react-google-maps/api'
import {useLoadScript} from '@react-google-maps/api'
import { mapStyles } from './mapStyles';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 35.6804,
  lng: 139.769,
};

const options = {
  styles: mapStyles,
};
  
  export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyApzvj3AYiAkv1Vr9x48zJ1NpK4DuqE-1M"
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
    options={options}
  ></GoogleMap>
  );
}
