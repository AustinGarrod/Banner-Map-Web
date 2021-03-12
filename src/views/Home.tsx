import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// Import components
import Map from '../components/Map'

interface Props extends RouteComponentProps
{

}

function Home({}:Props) {
  const classes = useStyles();

  return (
    <div className={classes.screenContainer}>
      <Map />
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    screenContainer: {
      width: "100%",
      height: "100%"
    }
  })
);

export default Home;
