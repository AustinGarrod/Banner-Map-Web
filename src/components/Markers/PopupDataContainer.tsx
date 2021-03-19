import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// Import typescript modules
import Banner from '../../typescript/Banner';

// Import custom components
import PopupDataRow from './PopupDataRow';
import PopupDataHeader from './PopupDataHeader';

interface Props
{
  banner: Banner
}

const PopupDataContainer = ({banner}: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <PopupDataHeader value={banner.bannerName} />
      <PopupDataRow title={"Branch"} value={banner.branch} />
      <PopupDataRow title={"Era"} value={banner.era} />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 10,
      marginBottom: 10
    }
  })
);

export default PopupDataContainer;
