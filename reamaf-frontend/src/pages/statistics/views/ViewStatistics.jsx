import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HumidityGraph from "../components/graphics/HumidityGraph";
import { Button } from "@mui/material";
import PrecipitationGraph from "../components/graphics/PrecipitationGraph";
import TemperatureGraph from "../components/graphics/TemperatureGraph";

const ViewStatistics = ({ statisticsId }) => {
  console.log(statisticsId);
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Estadisticas
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Bienvenido a remaf-maps estadísticas. En nuestra seccion de
            estadisticas encontraras graficos interactivos con datos relevantes
            de Temperatura, Humdead y Precipitación.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* Graphics*/}

        <TemperatureGraph />

        <HumidityGraph />

        <PrecipitationGraph />
      </Container>
    </main>
  );
};

export default ViewStatistics;
