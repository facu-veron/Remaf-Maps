import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import clima from "../../../media/clima.mp4";

const ViewStations = () => {
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
            de Formosa. En nuestra seccion de estaciones podras visualizar
            informacion relevante en tiempo real
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ViewStations;
