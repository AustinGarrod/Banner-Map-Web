import React from 'react';
import { makeStyles, Theme, createStyles, Paper, TextField } from '@material-ui/core';

interface Props {
  onTextChange: Function
}

const Table = ({ onTextChange }: Props) => {
  
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <TextField onChange={(event) => { onTextChange(event.target.value) }} 
        size="small" 
        fullWidth 
        placeholder="Search" 
        variant="outlined" 
        className={classes.searchbox} />
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginBottom: 5
    },
    searchbox: {
    }
  })
);

export default Table;