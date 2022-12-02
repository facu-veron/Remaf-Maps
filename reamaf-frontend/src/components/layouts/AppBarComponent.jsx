import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBarComponent = ({ toggleDrawer, open, page }) => {
  const navigate = useNavigate();
  const onclickStations = () => {
    navigate("/stations");
  };
  const onclickStatistics = () => {
    navigate("/statistics");
  };
  const onclickReturn = () => {
    navigate("/maps", {
      replace: true,
    });
  };

  {
    if (page === "Maps") {
      return (
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h2"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              remaf-maps
            </Typography>

            <Button onClick={onclickStatistics} sx={{ mr: 2 }} color="inherit">
              Estadística
            </Button>
            <Button onClick={onclickStations} sx={{ mr: 2 }} color="inherit">
              Estaciones
            </Button>
          </Toolbar>
        </AppBar>
      );
    }
    if (page === "Stations") {
      return (
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
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
      );
    }
  }
};
