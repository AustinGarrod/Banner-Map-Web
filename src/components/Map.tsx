import React from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LatLngTuple } from 'leaflet';

interface Props
{
  width: string,
  height: string,
  center: LatLngTuple,
  zoom: number,
  minZoom: number
}

function Map(props: Props) {
  const { center, zoom, minZoom } = props;
  const classes = useStyles(props)();

  return (
    <MapContainer className={classes.map} center={center} zoom={zoom} minZoom={minZoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
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
