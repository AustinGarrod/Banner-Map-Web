import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

// Import styles
import '../styles/home.css'

// Import components
import Map from '../components/Map'

// Import configurations
import STYLES from '../config/styles';
import SETTINGS from '../config/settings';

import Banner from '../typescript/Banner';

function Home(props: RouteComponentProps) {
  const classes = useStyles();
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(()=>{
    // Get banners from API

    fetch(`${SETTINGS.API_DOMAIN}/api/banner/all`, {
      headers: {
        "Authorization": `Bearer ${SETTINGS.API_KEY}`
      }
    })
    .then(response => {
      if (response.status !== 200) return Promise.reject(response.body);
      return Promise.resolve(response);
    })
    .then(response => response.json())
    .then(data => {
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
            markers={banners.map(banner => ({position: [banner.lat, banner.long], text: banner.bannerName}))}
            centerOnMarkers
          />
        </Grid>
        <Grid className={classes.tableGridArea} item lg={6} xs={12}>
          Table Area
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
      [theme.breakpoints.down('lg')]: {
        height: "100%"
      },
      [theme.breakpoints.down('md')]: {
        height: "50%"
      },
    },
    tableGridArea: {
      [theme.breakpoints.down('xl')]: {
        paddingLeft: STYLES.spacing,
        paddingTop: 0
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: STYLES.spacing,
        paddingLeft: 0
      },
    }
  })
);

export default Home;
