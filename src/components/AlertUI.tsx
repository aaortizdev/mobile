import Alert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";

interface AlertConfig {
    description: string;
    severity: AlertColor;
}

/* Componente: Alerta */
export default function AlertUI(config: AlertConfig) {
    return (
        <Alert severity={config.severity} variant="outlined">
            {config.description}
        </Alert>
    );
}