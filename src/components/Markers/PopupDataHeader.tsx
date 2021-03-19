import React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

// Import configs
import STYLES from '../../config/styles';

interface Props
{
  value: string
}

const PopupDataHeader = ({value}: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.row}>
      <Typography variant="subtitle2">
        { value }
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      width: STYLES.popupRowWidth,
    }
  })
);

export default PopupDataHeader;
