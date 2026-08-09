import Typography from "@mui/material/Typography";

/* Componente: Encabezado */
export default function HeaderUI() {
    return (
        <Typography variant="h3" component="h1" sx={{fontWeight:"bold", textAlign:"center"}}>
            Dashboard del Clima
        </Typography>
    );
}