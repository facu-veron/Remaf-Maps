import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import { AppBarComponent, DrawerComponent } from "../../../components/layouts";
import ViewStations from "../views/ViewStations";

const mdTheme = createTheme();

function MainComponentStations() {
  const [open, setOpen] = useState(true);
  const [stationId, setStationId] = useState(1);

  const getId = (id) => {
    setStationId(id);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* AppBar */}
        <AppBarComponent
          toggleDrawer={toggleDrawer}
          open={open}
          page="Stations"
        />
        {/* AppBar */}

        {/* Drawer */}
        <DrawerComponent
          toggleDrawer={toggleDrawer}
          open={open}
          page="Stations"
          getId={getId}
        />
        {/* Drawer */}

        {/* componente principal */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Stations */}
            <ViewStations stationId={stationId} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainComponentStations;
