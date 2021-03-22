import React from 'react';
import { Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

// Import typescript modules
import Banner from '../../typescript/Banner';

interface Props
{
  position: LatLngTuple,
  banners: Banner[],
  setPopupToDisplay: Function
}

const MapMarker = ({position, banners, setPopupToDisplay}: Props) => {
  return (
    <Marker 
      position={position}
      eventHandlers={{
        click: (e) => {
          setPopupToDisplay(position, banners);
        }
      }}
    >
    </Marker>
  );
}

export default MapMarker;
