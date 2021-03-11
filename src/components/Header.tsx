import React from 'react';
import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { navigate } from "@reach/router";

const handleTitleClick = () => {
  navigate("/");
}

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
          <Typography onClick={handleTitleClick} variant="h6" className={classes.title}>
            Honour Our Veterans Banner Map
          </Typography>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      cursor: "pointer"
    }
  })
);

export default Header;
