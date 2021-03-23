import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface Props {
  icon: string,
  width: number,
  height: number
}

const LoadingIcon = (props: Props) => {
  const { icon } = props;
  const classes = useStyles(props)();

  return (
    <img src={icon} alt="Loading Icon" className={classes.icon} />
  );
}

const useStyles = (props: Props) => makeStyles((theme: Theme) => 
    createStyles({
      icon: {
        // position: 'absolute',
        height: props.height,
        width: props.width,
        // left: `calc(50% - ${props.width / 2}px)`,
        // top: `calc(50% - ${props.height / 2}px)`
      }
  })
);

export default LoadingIcon;