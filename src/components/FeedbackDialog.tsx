import React from 'react';
import { makeStyles, Theme, createStyles, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

interface Props {
  shouldDisplay: boolean,
  text: string,
  title: string
}

const Table = ({ shouldDisplay, text, title }: Props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={shouldDisplay}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">
          { title }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { text }
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      
    }
  })
);

export default Table;