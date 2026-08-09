import { useEffect, useState } from "react";
import {type OpenMeteoResponse} from '../types/DashboardTypes';

// Estrategia para convertir la opción seleccionada en un objeto
const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  guayaquil: {
    latitude: -2.170998,
    longitude: -79.922359,
  },
  quito: {
    latitude: -0.180653,
    longitude: -78.467834,
  },
  manta: {
    latitude: -0.967653,
    longitude: -80.708910,
  },
  cuenca: {
    latitude: -2.900129,
    longitude: -79.005896,
  },
};

interface DataState {
    loading: boolean;
    data: OpenMeteoResponse | undefined;
    error: string | null;
}

export default function useFetchData(selectedOption: string | null) : DataState {
    // Parametrice la opción seleccionada en la URL del requerimiento asíncrono
    const cityConfig = selectedOption != null? CITY_COORDS[selectedOption] : CITY_COORDS["guayaquil"];
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&timezone=America%2FChicago`

    const [dataState, setDataState] = useState<DataState>({
        loading: true,
        data: undefined,
        error: null,
    });

    useEffect(() => {

        // Inicia una nueva petición
        setDataState({
            loading: true,
            data: undefined,
            error: null,
        });

        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }

                const json: OpenMeteoResponse = await response.json();
                setDataState({
                    loading: false,
                    data: json,
                    error: null,
                });

            } catch (err) {
                setDataState({
                    loading: false,
                    data: undefined,
                    error: (err as Error).message,
                });
            }
        };

        fetchData();
    }, [selectedOption]); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return dataState;
}