import React from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LatLngTuple } from 'leaflet';

interface Props
{
  position: LatLngTuplet,
  text: string
}

function Map({position, text}: Props) {
  return (
    <Marker position={position}>
      <Popup>
        { text }
      </Popup>
    </Marker>
  );
}

export default Map;
