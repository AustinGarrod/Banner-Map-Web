import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// Import configs
import STYLES from '../../config/styles';

interface Props
{
  title: string,
  value: string
}

const PopupDataRow = ({title, value}: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.row}>
      <div className={classes.title}>
        { `${title}:` }
      </div>
      <div className={classes.value}>
        { value }
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      display: "flex",
      flexDirection: "row",
      width: STYLES.popupRowWidth
    },
    title: {
      flex: 3,
      fontWeight: 600
    },
    value: {
      flex: 6
    }
  })
);

export default PopupDataRow;
