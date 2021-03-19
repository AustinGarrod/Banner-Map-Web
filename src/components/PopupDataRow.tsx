import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface Props
{
  title: string,
  value: string
}

function PopupDataContainer({title, value}: Props) {
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
      width: 200
    },
    title: {
      flex: 2
    },
    value: {
      flex: 6
    }
  })
);

export default PopupDataContainer;
