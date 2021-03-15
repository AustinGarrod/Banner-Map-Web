import React from 'react';
import { TileLayer, Popup, MapContainer } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LatLngTuple } from 'leaflet';

import '../styles/map.css';

import MapMarker from './MapMarker'

import Marker from '../typescript/Marker';

interface Props
{
  width: string,
  height: string,
  center: LatLngTuple,
  zoom: number,
  minZoom: number,
  markers?: Marker[]
}

function Map(props: Props) {
  const { center, zoom, minZoom, markers } = props;
  const classes = useStyles(props)();

  return (
    <MapContainer className={classes.map} center={center} zoom={zoom} minZoom={minZoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers?.map((marker, index) => <MapMarker key={`marker_${index}`} position={marker.position} text={marker.text} />)
      }
      
    </MapContainer>
  );
}

const useStyles = (props: Props) => makeStyles((theme: Theme) => 
  createStyles({
    map: {
      width: props.width,
      height: props.height
    }
  })
);

export default Map;
