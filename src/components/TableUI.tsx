import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
    return arrLabels.map((label, index) => ({
        id: index,
        label: label,
        value1: arrValues1[index],
        value2: arrValues2[index]
    }));
}

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 60
    },
    {
        field: 'label',
        headerName: 'Fecha y hora',
        width: 140,
    },
    {
        field: 'value1',
        headerName: 'Temp. (°C)',
        width: 115,
    },
    {
        field: 'value2',
        headerName: 'Velocidad del viento (km/h)',
        width: 225,
    },
];

interface TableUIProps {
    time: Array<string>;
    temperature: Array<number>;
    windSpeed: Array<number>;
}

export default function TableUI(props: TableUIProps) {

    const rows = combineArrays(props.time, props.temperature, props.windSpeed);

    return (
        <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
               }}
               pageSizeOptions={[10]}
               disableRowSelectionOnClick
            />
        </Box>
    );
}