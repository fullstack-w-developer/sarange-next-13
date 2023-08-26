import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridSortApi, GridValueGetterParams, } from '@mui/x-data-grid';


function generateRandom() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


interface Props {
    columns: GridColDef[] | any
    rows: any[]
}

export default function DataGridTable({ columns, rows }: Props) {
    
    return (
        <DataGrid
            rows={rows}
            columns={[
                {
                    field: '_id',
                    headerName: 'ردیف',
                    filterable: false,
                    renderCell: (params:any) =>
                    params.api.getRowIndexRelativeToVisibleRows(params.row._id) + 1,
                }

                , ...columns]}
            disableColumnSelector
            disableRowSelectionOnClick
            hideFooter
            getRowId={() => generateRandom()}
        />
    );
}