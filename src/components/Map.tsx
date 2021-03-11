import React from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import STYLES from '../config/styles';

function Map() {
  const classes = useStyles();

  return (
    <MapContainer className={classes.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      width: "50vw",
      height: "50vh"
    }
  })
);

export default Map;
