import styled from "@emotion/styled";
import { Divider, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ItemsLayers } from "../../pages/mapa/components/ItemsLayers";
import { useLocation } from "react-router-dom";
import  ItemsStations  from "../../pages/stations/components/ItemsStations";
import  ItemsStatisticsByStations  from "../../pages/statistics/components/ItemsStatisticsByStations";

const drawerWidth = 250;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const DrawerComponent = ({
  toggleDrawer,
  open,
  page,
  currentLayer,
  getId,
}) => {
  {
    if (page === "Maps") {
      return (
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider sx={{ my: 1, opacity: 0.2 }} />
          <List component="nav">
            <ItemsLayers currentLayer={currentLayer} />
            <Divider sx={{ my: 1, opacity: 0.2 }} />
          </List>
        </Drawer>
      );
    }

    if (page === "Stations") {
      return (
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider sx={{ my: 1, opacity: 0.2 }} />
          <List component="nav">
            <ItemsStations getId={getId} />
            <Divider sx={{ my: 1, opacity: 0.2 }} />
          </List>
        </Drawer>
      );
    }
    if (page === "Statistics") {
      return (
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider sx={{ my: 1, opacity: 0.2 }} />
          <List component="nav">
            <ItemsStatisticsByStations getId={getId} />
            <Divider sx={{ my: 1, opacity: 0.2 }} />
          </List>
        </Drawer>
      );
    }
  }
};
