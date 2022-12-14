import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Circle, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { stationsData } from "../../../data/stationsData";
import { getStationsById } from "../../../helpers/getStationsById";
import { TextComponentPopup } from "../components/TextComponetPopup";
import { connect } from 'react-redux';
import { get_estacion, set_estaciones } from "../../../actions/estaciones_action";

import "animate.css";
const IndexMapStations = (props) => {
  const [dataStation, setDataStation] = useState("")
  

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      //   console.log(e);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const changeStation = (latitud, longitud) => {
    map.flyTo(
      {
        lat: latitud,
        lng: longitud,
      },
      15
    );
  };

  useEffect(() => {
    map.locate();
    props.set_estaciones()
      /*.then((res) => {
        if (res) {
          if(res.length > 0){
            console.log('entró... ------------------')
            setDataStation(res);
          }
        }
      });*/
  }, []);

  /*
  useEffect(() => {

  })
  */

  
  useEffect( () => {
    //console.log("estaciones");
    //console.log(props.state);
    if (!props.state.estaciones_reducer.estaciones) {
      return false
    }

    if(props.state.estaciones_reducer.estaciones.length > 0){
      console.log('entró...')
      setDataStation(props.state.estaciones_reducer.estaciones[0])
    }
    
    //console.log(dataStation);
  }, [props.state.estaciones_reducer.estaciones])
  

  useEffect(() => {
    if (!props.stationId) return;

    let data_geo
    if(dataStation){

      dataStation.forEach( elem => {
        if(elem.location.id_weather_station == props.stationId){
          data_geo = elem.location.punto.slice(6, -1).split(" ")
        }
      }) 
      
      const latitud = data_geo[1];
      const longitud = data_geo[0];
  
      map.flyTo(
        {
          lat: latitud,
          lng: longitud,
        },
        18
      );
    }
  }, [props.stationId]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataStation !== "" && dataStation.map((station) => (
        <Grid
          key={station.id}
          className="iframe animate__animated animate__animate__flash animate__delay-1s 
          animate__slower	3s "
          component="div"
        >
          <Marker
            position={[station.location.punto.slice(6, -1).split(" ")[1], station.location.punto.slice(6, -1).split(" ")[0]]}
            eventHandlers={{
              click: () => {
                changeStation(station.location.punto.slice(6, -1).split(" ")[1], station.location.punto.slice(6, -1).split(" ")[0]);
              },
            }}
          >
            <Popup>
              <TextComponentPopup
                title={"Estación: "}
                description={`${station.location.id_weather_station}`}
              />
              
              <br />
               <TextComponentPopup
                title={"Localidad: "}
                description={`${station.location.data.localidad}`}
              />
              <br />
              <TextComponentPopup
                title={"Temperatura: "}
                description={`${station.location.data.temperatura}`}
              />
              <br />
              <TextComponentPopup
                title={"Humedad: "}
                description={`${station.location.data.humedad}`}
              />
              <br />
              <TextComponentPopup
                title={"Precipitación: "}
                description={`${station.location.data.precipitacion}`}
              />
              <br />
              <TextComponentPopup
                title={"Direccion del viento: "}
                description={`${station.location.data.direcc_viento}`}
              />
              <br />
              <TextComponentPopup
                title={"Velocidad del viento: "}
                description={`${station.location.data.veloc_viento}`}
              /> 
            </Popup>
          </Marker>
          <Circle
            center={[station.location.punto.slice(6, -1).split(" ")[1], station.location.punto.slice(6, -1).split(" ")[0]]}
            pathOptions={{ fillColor: "blue" }}
            radius={50}
          />
        </Grid>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {set_estaciones})(IndexMapStations);
