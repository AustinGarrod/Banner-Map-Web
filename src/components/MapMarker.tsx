import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

interface Props
{
  position: LatLngTuple,
  text: string
}

function MapMarker({position, text}: Props) {
  return (
    <Marker position={position}>
      <Popup>
        { text }
      </Popup>
    </Marker>
  );
}

export default MapMarker;
