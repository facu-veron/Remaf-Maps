import { Grid, Paper } from '@mui/material';

import 'animate.css';

import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import IndexMap from './IndexMap';
import { useEffect, useState } from 'react';
import { useLayer } from '../../../context/LayersProvider';

const ViewMaps = () => {
  /* className="iframe animate__animated animate__fadeIn animate__delay-2s 
      animate__slower	3s animate__repeat-3" */
  const layer = useLayer();

  const [title, setTitle] = useState('Normal');

  useEffect(() => {
    switch (layer) {
      case 'wind_new':
        setTitle('Capa Humedad');
        break;

      case 'precipitation_new':
        setTitle('Capa Precipitaciones');
        break;
      case 'temp_new':
        setTitle('Capa Temperatura');
        break;

      default:
        setTitle('Capa Humedad');
        break;
    }
  }, [layer]);
  return (
    <Grid component="div" item xs={12} md={8} lg={9}>
      <h1>{title}</h1>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 800,
        }}
      >
        <MapContainer
          style={{ height: 800 }}
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <IndexMap />
        </MapContainer>
      </Paper>
    </Grid>
  );
};

export default ViewMaps;
