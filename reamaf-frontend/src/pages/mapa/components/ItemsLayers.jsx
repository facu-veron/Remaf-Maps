import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MapIcon from "@mui/icons-material/Map";
import LayersIcon from "@mui/icons-material/Layers";
import { useState } from "react";

export const ItemsLayers = ({ currentLayer }) => {
  const [open, setOpen] = useState(true);

  const handleClickItemLayer = (layer) => {
    currentLayer(layer);
  };

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
          <MapIcon color="action" sx={{ fontSize: 35 }} />
        </ListItemIcon>
        <ListItemText primary="Capas" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => handleClickItemLayer("wind_new")}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <LayersIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Velocidad del viento " />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => handleClickItemLayer("precipitation_new")}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <LayersIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Precipitacion" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => handleClickItemLayer("temp_new")}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <LayersIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Temperatura" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
