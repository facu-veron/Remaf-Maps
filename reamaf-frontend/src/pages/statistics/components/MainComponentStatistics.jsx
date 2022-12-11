import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ViewStatistics from "../views/ViewStatistics";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function MainComponentStatistics() {
  const navigate = useNavigate();

  const onclickReturn = () => {
    navigate("/maps", {
      replace: true,
    });
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component="h2"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              remaf-maps
            </Typography>

            <Button onClick={onclickReturn} sx={{ mr: 2 }} color="inherit">
              Volver
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <ViewStatistics />
    </>
  );
}
