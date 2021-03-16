import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Theme, createStyles, Grid, Tab } from '@material-ui/core';

// Import styles
import '../styles/home.css';

// Import components
import Map from '../components/Map';
import Table from '../components/Table';

// Import configurations
import STYLES from '../config/styles';
import SETTINGS from '../config/settings';

import Banner from '../typescript/Banner';

const tableColumns = [
  { field: 'bannerName', headerName: 'Name', flex: 1 },
  { field: 'era', headerName: 'Era of Service', flex: 1 },
  { field: 'branch', headerName: 'Branch', flex: 1 },
  { field: 'sponsor', headerName: 'Sponsor', flex: 1 },
];

function Home(props: RouteComponentProps) {
  const classes = useStyles();
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(()=>{
    // Get banners from API

    fetch(`${SETTINGS.API_DOMAIN}/api/banner/active`)
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
