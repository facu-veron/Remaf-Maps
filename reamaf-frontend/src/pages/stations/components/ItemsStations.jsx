import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import { useState } from "react";

export const ItemsStations = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocationOnIcon color="action" sx={{ fontSize: 35 }} />
        </ListItemIcon>
        <ListItemText primary="Estaciones" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 1" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 2" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 3" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 4" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 5" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 6" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 7" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 8" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 9" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 10" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
