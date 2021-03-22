import React from 'react';
import { Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { makeStyles, Theme, createStyles, Divider } from '@material-ui/core';

// Import typescript modules
import Banner from '../../typescript/Banner';

// Import custom components
import PopupDataContainer from './PopupDataContainer';

interface Props
{
  position: LatLngTuple,
  banners: Banner[],
  setDisplayPopup: Function
}

const generateContainerRows = (banners: Banner[]):React.ReactElement[] => {
  let containerRows: React.ReactElement[] = [];

  banners.forEach((banner, index) => {
    containerRows.push(<PopupDataContainer key={`popup_${index}`} banner={banner} />);
    if (banners[index + 1]) containerRows.push(<Divider key={`divider_${index}`} />);
  });

  return containerRows;
}

const PopupDisplay = ({position, banners, setDisplayPopup}: Props) => {
  const classes = useStyles();
  const containerRows = generateContainerRows(banners);

  return (
    <Popup onClose={() => { setDisplayPopup(false) }} position={position} className={classes.popup}>
      {
        containerRows
      }
    </Popup>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popup: {
      marginBottom: 61
    }
  })
);

export default PopupDisplay;
