import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface ChartUIProps {
    temperature: Array<number>
    windSpeed: Array<number>
    hour: Array<string>
}


export default function ChartUI(props: ChartUIProps) {
    return (
        <>
            <Typography variant="h5" component="div" sx={{display:"flex", justifyContent:"center"}}>
                Temperatura y velocidad del viento por horas
            </Typography>
            <LineChart height={300} series={[{ data: props.temperature, label: 'Temperatura'}, { data: props.windSpeed, label: 'Velocidad del viento'}]} xAxis={[{ scaleType: 'point', data: props.hour, valueFormatter: (value) => value.substring(5, 10), tickInterval: (_, index) => index % 24 === 0}]}/>
        </>
    );
}