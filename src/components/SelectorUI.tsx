import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

/* Componente: Selector */

// Interfaz del prop
interface SelectorProps {
   onOptionSelect: (option: string) => void;
}

export default function SelectorUI({ onOptionSelect }: SelectorProps) {
    const [cityInput, setCityInput] = useState("guayaquil");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value);
        // Comunique los cambios al componente padre
        onOptionSelect(event.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select labelId="city-select-label" id="city-simple-select" label="Ciudad" value={cityInput} onChange={handleChange}>
                <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
                <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
                <MenuItem value={"quito"}>Quito</MenuItem>
                <MenuItem value={"manta"}>Manta</MenuItem>
                <MenuItem value={"cuenca"}>Cuenca</MenuItem>
            </Select>
        </FormControl>
    )
}