import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import HeaderUI from '../components/HeaderUI';
import AlertUI from '../components/AlertUI';
import SelectorUI from '../components/SelectorUI';
import IndicatorUI from '../components/IndicatorUI';
import useFetchData from '../hooks/useFetchData';
import TableUI from '../components/TableUI';
import ChartUI from '../components/ChartUI';
import AdditionalInfoUI from '../components/AdditionalInfoUI';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dataFetcherOutput = useFetchData(selectedOption);

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen style={{ '--background': '#f4f6f8' } as React.CSSProperties}>
        <Grid container spacing={5} sx={{ justifyContent: "left", alignItems: "center", padding: 2 }}>
          {/* Encabezado */}
          <Grid size={{ xs: 12, md: 12 }}>
            <HeaderUI />
          </Grid>

          {/* Alertas */}
          <Grid size={{ xs: 12, md: 3 }}>
            <AlertUI severity="success" description="No se preveen lluvias" />
          </Grid>

          {/* Selector */}
          <Grid size={{ xs: 12, md: 9 }}>
            <SelectorUI onOptionSelect={setSelectedOption} />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <p style={{ fontSize: '1.2rem', margin: 0 }}>
              Información del clima en <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{selectedOption || 'guayaquil'}</span>
            </p>
          </Grid>

          {/* Indicadores */}
          <Grid container size={{ xs: 12, md: 12 }}>
            <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
                <AlertUI severity="error" description={dataFetcherOutput.error} />
              ) : (
                dataFetcherOutput.data && (<IndicatorUI title="Temperatura (2m)" description={`${dataFetcherOutput.data.current.temperature_2m} ${dataFetcherOutput.data.current_units.temperature_2m}`} />))}
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
                <AlertUI severity="error" description={dataFetcherOutput.error} />
              ) : (
                dataFetcherOutput.data && (<IndicatorUI title="Temperatura aparente" description={`${dataFetcherOutput.data.current.apparent_temperature} ${dataFetcherOutput.data.current_units.apparent_temperature}`} />))}
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
                <AlertUI severity="error" description={dataFetcherOutput.error} />
              ) : (
                dataFetcherOutput.data && (<IndicatorUI title="Velocidad del viento" description={`${dataFetcherOutput.data.current.wind_speed_10m} ${dataFetcherOutput.data.current_units.wind_speed_10m}`} />))}
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
                <AlertUI severity="error" description={dataFetcherOutput.error} />
              ) : (
                dataFetcherOutput.data && (<IndicatorUI title="Humedad relativa" description={`${dataFetcherOutput.data.current.relative_humidity_2m} ${dataFetcherOutput.data.current_units.relative_humidity_2m}`} />))}
            </Grid>
          </Grid>

          {/* Gráfico */}
          <Grid size={{ xs: 12, md: 6 }}>
            {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
              <AlertUI severity="error" description={dataFetcherOutput.error} />
            ) : (
              dataFetcherOutput.data && (<ChartUI temperature={dataFetcherOutput.data.hourly.temperature_2m} windSpeed={dataFetcherOutput.data.hourly.wind_speed_10m} hour={dataFetcherOutput.data.hourly.time} />)
            )}
          </Grid>

          {/* Tabla */}
          <Grid size={{ xs: 12, md: 6 }}>
            {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
              <AlertUI severity="error" description={dataFetcherOutput.error} />
            ) : (
              dataFetcherOutput.data && (<TableUI temperature={dataFetcherOutput.data.hourly.temperature_2m} windSpeed={dataFetcherOutput.data.hourly.wind_speed_10m} time={dataFetcherOutput.data.hourly.time} />)
            )}
          </Grid>

          {/* Información adicional */}
          <Grid size={{ xs: 12, md: 12 }}>
            {dataFetcherOutput.loading ? (<p>Cargando...</p>) : dataFetcherOutput.error ? (
              <AlertUI severity="error" description={dataFetcherOutput.error} />
            ) : (
              dataFetcherOutput.data && (<AdditionalInfoUI maxTemperature={Math.max(...dataFetcherOutput.data.hourly.temperature_2m)} maxWindSpeed={Math.max(...dataFetcherOutput.data.hourly.wind_speed_10m)} />)
            )}
          </Grid>

        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;