import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ViewStatistics from "../views/ViewStatistics";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function MainComponentStatistics() {
  const navigate = useNavigate();

  const onclickReturn = () => {
    navigate("/maps", {
      replace: true,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button onClick={onclickReturn} sx={{ mr: 2 }} color="inherit">
            Volver
          </Button>
        </Toolbar>
      </AppBar>
      {/* ViewStatistics */}
      <ViewStatistics />
    </ThemeProvider>
  );
}
