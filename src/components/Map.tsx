import React, { useState } from 'react';
import { TileLayer, MapContainer, } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LatLngBounds, LatLngTuple, Map as LeafletMap } from 'leaflet';

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
  markers?: Marker[],
  centerOnMarkers?: boolean
}

function Map(props: Props) {
  const { center, zoom, minZoom, markers, centerOnMarkers } = props;
  const [map, setMap] = useState<LeafletMap>();
  const classes = useStyles(props)();

  if (markers?.length && map && centerOnMarkers) {
    const bounds = new LatLngBounds(markers?.map(marker => marker.position));
    map.fitBounds(bounds);
  }

  return (
    <MapContainer 
      className={classes.map} 
      center={center} 
      zoom={zoom} 
      minZoom={minZoom}
      whenCreated={setMap}
    >
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
