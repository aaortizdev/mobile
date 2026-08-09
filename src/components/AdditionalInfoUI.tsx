import { Card, CardContent, Typography } from "@mui/material";

interface AdditionalInfoUIProps {
    maxTemperature: number;
    maxWindSpeed: number;
}

export default function AdditionalInfoUI(props: AdditionalInfoUIProps) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Información adicional
                </Typography>

                <Typography variant="body2">
                    La temperatura máxima esperada para hoy es de {props.maxTemperature} °C y la velocidad
                    máxima del viento alcanzará los {props.maxWindSpeed}  km/h.
                </Typography>
            </CardContent>
        </Card>
    );
}