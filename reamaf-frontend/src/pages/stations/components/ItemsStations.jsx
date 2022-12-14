import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const ItemsStations = (props) => {
  const [open, setOpen] = useState(true);
  const [stations, setStations] = useState("")

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect( () => {
    console.log(props);
    if (!props.state.estaciones_reducer.estaciones) {
      return false
    }

    if(props.state.estaciones_reducer.estaciones.length > 0){
      console.log('entró...')
      setStations(props.state.estaciones_reducer.estaciones[0])
    }
  }, [props.state.estaciones_reducer.estaciones])

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

      {stations !== "" && stations.map( station => 
            <List component="div" disablePadding>
              <ListItemButton onClick={() => props.getId(station.location.id_weather_station)} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SouthAmericaIcon sx={{ fontSize: 30 }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={station.location.name} />
              </ListItemButton>
          </List>
        )}
        
      </Collapse>
    </List>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ItemsStations)