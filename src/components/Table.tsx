import React from 'react';
import { DataGrid, GridColDef, GridSortModel } from '@material-ui/data-grid';
import { makeStyles, Theme, createStyles, Paper } from '@material-ui/core';

interface Props {
  columns: GridColDef[],
  data: object[],
  sortModel: GridSortModel
}

const Table = ({ columns, data, sortModel }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.tableContainer}>
      <DataGrid sortModel={sortModel} rows={data} columns={columns} autoPageSize />
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      width: "100%",
      flex: 1,
    }
  })
);

export default Table;