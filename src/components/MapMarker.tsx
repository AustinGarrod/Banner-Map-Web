import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// Import typescript modules
import Banner from '../typescript/Banner';

// Import custom components
import PopupDataContainer from './PopupDataContainer';

interface Props
{
  position: LatLngTuple,
  banners: Banner[]
}

function MapMarker({position, banners}: Props) {
  const classes = useStyles();

  return (
    <Marker position={position}>
      <Popup className={classes.popup}>
        {
          banners.map((banner, index) => <PopupDataContainer key={index} banner={banner} />)
        }
      </Popup>
    </Marker>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popup: {
    }
  })
);

export default MapMarker;
