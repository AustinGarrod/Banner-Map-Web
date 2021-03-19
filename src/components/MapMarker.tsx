import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { makeStyles, Theme, createStyles, Divider } from '@material-ui/core';

// Import typescript modules
import Banner from '../typescript/Banner';

// Import custom components
import PopupDataContainer from './PopupDataContainer';

interface Props
{
  position: LatLngTuple,
  banners: Banner[]
}

const generateContainerRows = (banners: Banner[]):React.ReactElement[] => {
  let containerRows: React.ReactElement[] = [];

  banners.forEach((banner, index) => {
    containerRows.push(<PopupDataContainer key={index} banner={banner} />);
    if (banners[index + 1]) containerRows.push(<Divider />);
  });

  return containerRows;
}

const MapMarker = ({position, banners}: Props) => {
  const classes = useStyles();
  const containerRows = generateContainerRows(banners);

  return (
    <Marker position={position}>
      <Popup className={classes.popup}>
        {
          containerRows
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
