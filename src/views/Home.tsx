import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import { LatLngTuple, Map as LeafletMap } from 'leaflet';
import Fuse from 'fuse.js';

// Import styles
import '../styles/home.css';

// Import components
import Map from '../components/Map';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

// Import configurations
import STYLES from '../config/styles';
import SETTINGS from '../config/settings';

// Import typescript modules
import Banner from '../typescript/Banner';
import Pole from '../typescript/Pole';
import Marker from '../typescript/Marker';

// Define columns for table
const tableColumns = [
  { field: 'bannerName', headerName: 'Name', flex: 1 },
  { field: 'era', headerName: 'Era of Service', flex: 1 },
  { field: 'branch', headerName: 'Branch', flex: 1 }
];

// Creates a location ID string from banner lat and long
const makeBannerLocationId = (banner: Banner): string => `${banner.lat}${banner.long}`;

// Creates a Record of Poles from an array of banners
const getPolesFromBanners = (banners: Banner[]): Record<string, Pole> => {
  let poles: Record<string, Pole> = {};

  banners.forEach(banner => {
    const bannerId: string = makeBannerLocationId(banner);
    if (bannerId in poles) {
      // Location already exists, append banner
      poles[bannerId].banners.push(banner);
    } else {
      // Create new location
      poles[bannerId] = {
        location: [ banner.lat, banner.long ],
        banners: [ banner ]
      }
    }
  });

  return poles;
}

// Creates an array of Markers from a Record of Poles
const getMarkersFromPoles = (poles: Record<string, Pole>): Marker[] => {
  let markers: Marker[] = [];

  for (let key in poles) {
    let marker: Marker = {
      position: poles[key].location,
      banners: poles[key].banners
    }
    markers.push(marker);
  }

  return markers;
}

const Home = (props: RouteComponentProps) => {
  const classes = useStyles();

  const [banners, setBanners] = useState<Banner[]>([]);
  const [filteredBanners, setFilteredBanners] = useState<Banner[]>([]);
  const [poles, setPoles] = useState<Record<string, Pole>>();
  const [filteredPoles, setFilteredPoles] = useState<Record<string, Pole>>();
  const [map, setMap] = useState<LeafletMap>();
  const [popupLocation, setPopupLocation] = useState<LatLngTuple>([0,0]);
  const [popupBanners, setPopupBanners] = useState<Banner[]>([]);
  const [displayPopup, setDisplayPopup] = useState<boolean>(false);
  const [centerMapOnMarkers, setCenterMapOnMarkers] = useState<boolean>(false);

  // Handles changing of search text
  const onSearchChange = (searchText: string) => {
    setCenterMapOnMarkers(true);
    map?.closePopup();
    if (searchText === "") {
      setFilteredBanners(banners);
      setFilteredPoles(poles);
    } else {
      const fuse = new Fuse(banners, {
        keys: ['lastName', 'firstName', 'bannerName', 'era', 'branch', 'sponsor'],
        threshold: 0.1,
        findAllMatches: true,
      });
      const results = fuse.search(searchText).map(result => result.item);
      setFilteredBanners(results);
      setFilteredPoles(getPolesFromBanners(results));
    }
  }

  const setPopupToDisplay = (location: LatLngTuple, banners: Banner[]) => {
    setCenterMapOnMarkers(false);
    setPopupLocation(location);
    setPopupBanners(banners);
    setDisplayPopup(true);
    map?.flyTo(location);
  }

  useEffect(()=>{
    // Get banners from API
    fetch(`${SETTINGS.API_DOMAIN}/api/banner/active`)
    .then(response => {
      if (response.status !== 200) return Promise.reject(response.body);
      return Promise.resolve(response);
    })
    .then(response => response.json())
    .then(data => {
      setPoles(getPolesFromBanners(data));
      setFilteredPoles(getPolesFromBanners(data));

      setBanners(data);
      setFilteredBanners(data);
      setCenterMapOnMarkers(true);
    })
    .catch(error => { console.log("Failed to load banners", error) });
  }, [])

  return (
    <div className={classes.screenContainer}>
      <Grid container>
        <Grid className={classes.mapGridArea} item md={6} xs={12}>
          <Map 
            width="100%" 
            height="100%" 
            center={SETTINGS.MAP_CENTER}
            zoom={SETTINGS.FULL_MAP_ZOOM}
            minZoom={SETTINGS.MAP_MIN_ZOOM}
            markers={filteredPoles ? getMarkersFromPoles(filteredPoles) : []}
            passMapToParent={setMap}
            centerOnMarkers={centerMapOnMarkers}
            popupBanners={popupBanners}
            popupLocation={popupLocation}
            displayPopup={displayPopup}
            setPopupToDisplay={setPopupToDisplay}
            setDisplayPopup={setDisplayPopup}
          />
        </Grid>
        <Grid className={classes.tableGridArea} item md={6} xs={12}>
          <SearchBar onTextChange={onSearchChange} />
          <Table columns={tableColumns} 
            data={filteredBanners.map(banner => ({ ...banner, ...{"id": banner._id} }) )}
            sortModel={[
              {
                field: 'bannerName',
                sort: 'asc',
              },
            ]}/>
        </Grid>
      </Grid>
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    screenContainer: {
      position: "absolute",
      top: STYLES.spacing + STYLES.headerHeight,
      left: STYLES.spacing,
      bottom: STYLES.spacing,
      right: STYLES.spacing,
      flexGrow: 1
    },
    mapGridArea: {
      [theme.breakpoints.down(STYLES.largeBreakpoint)]: {
        height: "100%"
      },
      [theme.breakpoints.down(STYLES.smallBreakpoint)]: {
        height: "35%"
      },
    },
    tableGridArea: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down(STYLES.largeBreakpoint)]: {
        paddingLeft: STYLES.spacing,
        paddingTop: 0,
        height: "100%"
      },
      [theme.breakpoints.down(STYLES.smallBreakpoint)]: {
        paddingTop: STYLES.spacing,
        paddingLeft: 0,
        height: "65%"
      },
    }
  })
);

export default Home;
