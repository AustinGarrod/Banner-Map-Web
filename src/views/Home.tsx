import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

// Import styles
import '../styles/home.css';

// Import components
import Map from '../components/Map';
import Table from '../components/Table';

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
  { field: 'branch', headerName: 'Branch', flex: 1 },
  { field: 'sponsor', headerName: 'Sponsor', flex: 1 },
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
  const [poles, setPoles] = useState<Record<string, Pole>>();

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
      setBanners(data);
    })
    .catch(error => { console.log("Failed to load banners", error) });
  }, [])

  return (
    <div className={classes.screenContainer}>
      <Grid container>
        <Grid className={classes.mapGridArea} item lg={6} xs={12}>
          <Map 
            width="100%" 
            height="100%" 
            center={SETTINGS.MAP_CENTER}
            zoom={SETTINGS.FULL_MAP_ZOOM}
            minZoom={SETTINGS.MAP_MIN_ZOOM}
            markers={poles ? getMarkersFromPoles(poles) : []}
            centerOnMarkers
          />
        </Grid>
        <Grid className={classes.tableGridArea} item lg={6} xs={12}>
          <Table columns={tableColumns} data={banners.map(banner => ({ ...banner, ...{"id": banner._id} }) )} pageSize={5} />
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
      [theme.breakpoints.down('xl')]: {
        height: "100%"
      },
      [theme.breakpoints.down('md')]: {
        height: "50%"
      },
    },
    tableGridArea: {
      [theme.breakpoints.down('xl')]: {
        paddingLeft: STYLES.spacing,
        paddingTop: 0,
        height: "100%"
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: STYLES.spacing,
        paddingLeft: 0,
        height: "50%"
      },
    }
  })
);

export default Home;
