import React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

// Import custom components
import LoadingIcon from './LoadingIcon';

// Import configurations
import STYLES from '../../config/styles';

interface Props {
  icon: string,
  iconSize?: [number, number],
  text?: string,
  subtext?: string
}

const LoadingOverlay = ({ icon, iconSize, text, subtext }:Props) => {
  const classes = useStyles();
  const iconHeight = iconSize ? iconSize[0] : STYLES.defaultLoadingIconSize;
  const iconWidth = iconSize ? iconSize[1] : STYLES.defaultLoadingIconSize;

  return (
    <div className={classes.overlay}>
        <LoadingIcon icon={icon} width={iconWidth} height={iconHeight} />
        {
          text && <Typography variant="h5">{ text }</Typography>
        }{
          subtext && <Typography variant="subtitle1">{ subtext }</Typography>
        }
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overlay: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1100, // Leaflet map has elements at 1000
      background: "rgba(255, 255, 255, 0.9)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

export default LoadingOverlay;