import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { set_estaciones, set_estacion } from "../../../actions/estaciones_action";

const ItemsStatisticsByStations = (props) => {
  const [open, setOpen] = useState(true);
  const [stations, setStations] = useState("")

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    
    props.set_estaciones()
    
  }, []);

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


  const set_stadics = (id) => {
    
    props.set_estacion(id)
  }

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

      {stations !== "" && stations.map( station =>
        
          <List component="div" disablePadding>
            <ListItemButton onClick={() => set_stadics(station.location.id_weather_station)} sx={{ pl: 4 }}>
              <ListItemIcon>
                <BarChartIcon sx={{ fontSize: 30 }} color="primary" />
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

export default connect(mapStateToProps, {set_estaciones, set_estacion})(ItemsStatisticsByStations)
