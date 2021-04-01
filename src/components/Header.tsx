import React from 'react';
import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Link } from "@reach/router";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title} noWrap>
          <Link to="/" className={classes.link}>
            Honour Our Veterans Banner Map - Uxbridge
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    link: {
      color: "#FFFFFF",
      textDecoration: "none"
    }
  })
);

export default Header;
