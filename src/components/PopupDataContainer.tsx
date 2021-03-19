import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// Import typescript modules
import Banner from '../typescript/Banner';

// Import custom components
import PopupDataRow from './PopupDataRow';

interface Props
{
  banner: Banner
}

function PopupDataContainer({banner}: Props) {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <PopupDataRow title={"Name"} value={banner.bannerName} />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
    }
  })
);

export default PopupDataContainer;
