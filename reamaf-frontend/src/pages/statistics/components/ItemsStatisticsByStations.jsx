import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";

export const ItemsStatisticsByStations = ({ getId }) => {
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
          <StackedLineChartIcon color="action" sx={{ fontSize: 35 }} />
        </ListItemIcon>
        <ListItemText primary="Estadisticas" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(1)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 1" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(2)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 2" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(3)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 3" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(4)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 4" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(5)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 5" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(6)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 6" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(7)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 7" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(8)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 8" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(9)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 9" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => getId(10)} sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
            </ListItemIcon>
            <ListItemText primary="Estación 10" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
