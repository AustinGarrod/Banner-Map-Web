import React from 'react';
import { Router } from "@reach/router";
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

// Import custom components
import Header from './components/Header';

// Import views
import Home from './views/Home';
import Details from './views/Details';

// Import configurations
import STYLES from './config/styles'

function App() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Router>
          <Home path="/" />
          <Details path="/veteran" />
        </Router>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      paddingTop: STYLES.padding
    }
  })
);


export default App;
