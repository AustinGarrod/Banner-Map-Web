import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface Props {
  columns: GridColDef[],
  data: object[],
  pageSize: number,
}

const Table = ({ columns, data, pageSize }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <DataGrid rows={data} columns={columns} autoPageSize />
    </div>
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