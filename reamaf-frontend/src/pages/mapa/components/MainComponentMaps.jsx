import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { AppBarComponent, DrawerComponent } from "../../../components/layouts";

import { useState } from "react";
import ViewMaps from "../views/ViewMaps";

const mdTheme = createTheme();

function MainComponentMaps() {
  const [layer, setLayer] = useState("clouds_new");

  const currentLayer = (layer) => {
    setLayer(layer);
  };

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* AppBar */}
        <AppBarComponent toggleDrawer={toggleDrawer} open={open} page="Maps" />
        {/* AppBar */}

        {/* Drawer */}
        <DrawerComponent
          toggleDrawer={toggleDrawer}
          open={open}
          page="Maps"
          /* Update layer */

          currentLayer={currentLayer}
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
            {/* Mapa */}
            <ViewMaps layer={layer} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainComponentMaps;
