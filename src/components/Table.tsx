import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSortModel } from '@material-ui/data-grid';
import { makeStyles, Theme, createStyles, Paper } from '@material-ui/core';

interface Props {
  columns: GridColDef[],
  data: object[],
  sortModel: GridSortModel,
  onRowClick: Function
}

const Table = ({ columns, data, sortModel, onRowClick }: Props) => {
  const classes = useStyles();
  const [sortModelCache, setSortModelCache] = useState<GridSortModel>();

  return (
    <Paper className={classes.tableContainer}>
      <DataGrid 
        sortModel={ sortModelCache ? sortModelCache : sortModel } 
        rows={data} 
        columns={columns} 
        autoPageSize 
        onRowClick={e => { onRowClick(e.row) }}
        onSortModelChange={e => { setSortModelCache(e.sortModel) }}
        />
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