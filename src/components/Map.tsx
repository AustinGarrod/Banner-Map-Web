import React, { useState } from 'react';
import { TileLayer, MapContainer } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LatLngBounds, LatLngTuple, Map as LeafletMap } from 'leaflet';

// Import styles
import '../styles/map.css';

// Import custom components
import MapMarker from './Markers/MapMarker'

// Import typescript modules
import Marker from '../typescript/Marker';
import PopupDisplay from './Markers/PopupDisplay';
import Banner from '../typescript/Banner';

interface Props
{
  width: string,
  height: string,
  center: LatLngTuple,
  zoom?: number,
  minZoom: number,
  markers: Marker[],
  centerOnMarkers?: boolean,
  passMapToParent: Function,
  displayPopup: boolean,
  popupBanners: Banner[],
  popupPosition: LatLngTuple,
  setPopupToDisplay: Function,
  setDisplayPopup: Function,
}

const Map = (props: Props) => {
  const { center, zoom, minZoom, markers, centerOnMarkers, 
          passMapToParent, displayPopup, popupBanners, 
          popupPosition, setPopupToDisplay, setDisplayPopup } = props;
  const [map, setMap] = useState<LeafletMap>();
  const classes = useStyles(props)();

  const centerMapOnMarkers = (markers: Marker[]) => {
    const bounds = new LatLngBounds(markers?.map(marker => marker.position));
    map?.fitBounds(bounds);
  }

  if (markers.length && map && centerOnMarkers) {
    window.addEventListener("resize", () => {
      centerMapOnMarkers(markers);
    })
    centerMapOnMarkers(markers);
  }

  const updateMap = (mapInstance: LeafletMap) => {
    setMap(mapInstance);
    passMapToParent(mapInstance);
  }

  return (
    <MapContainer 
      className={classes.map} 
      center={center} 
      zoom={zoom} 
      minZoom={minZoom}
      whenCreated={updateMap}
      zoomSnap={0.8}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers.map((marker, index) => <MapMarker key={`marker_${index}`} position={marker.position} banners={marker.banners} setPopupToDisplay={setPopupToDisplay} />)
      }
      {
        displayPopup && <PopupDisplay setDisplayPopup={setDisplayPopup} position={popupPosition} banners={popupBanners} />
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
