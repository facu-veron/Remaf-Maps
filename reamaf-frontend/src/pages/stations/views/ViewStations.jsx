import { Grid, Paper, Typography } from "@mui/material";
import { MapContainer } from "react-leaflet";
import "animate.css";
import IndexMapStations from "./IndexMapStations";

const ViewStations = ({ stationId }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Estaciones
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Encuentra informacion de cada estacion situada en nuestra Provincia
            de Formosa. En la seccion de estaciones podras visualizar
            informacion relevante en tiempo real
          </Typography>
        </Paper>
        <Grid
          className="iframe animate__animated animate__fadeIn animate__delay-1s 
          animate__slower	3s "
          component="div"
          item
          sx={{ mt: 2 }}
          xs={12}
          md={8}
          lg={12}
        >
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 1000,
            }}
          >
            <MapContainer
              style={{ height: 1000, width: "auto" }}
              center={{ lat: 51.505, lng: -0.09 }}
              zoom={13}
              scrollWheelZoom={false}
            >
              <IndexMapStations stationId={stationId} />
            </MapContainer>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewStations;
