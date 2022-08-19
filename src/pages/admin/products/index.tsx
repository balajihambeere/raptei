import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../features/dashboard/Layout';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json())
    .then(json => json);

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'size',
        headerName: 'Size',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 250,
    },
];

const Products: NextPageWithLayout = (): React.ReactElement => {
    const { data, error } = useSWR('http://localhost:3004/products', fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
};

Products.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
};

export default Products;