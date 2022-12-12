import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { stationsData } from "../../../data/stationsData";
import { getStationsById } from "../../../helpers/getStationsById";
import { TextComponentPopup } from "../components/TextComponetPopup";
import "animate.css";
const IndexMapStations = ({ stationId }) => {
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
  }, []);

  useEffect(() => {
    if (!stationId) return;

    const station = getStationsById(stationId);
    const latitud = station.latitud;
    const longitud = station.longitud;

    map.flyTo(
      {
        lat: latitud,
        lng: longitud,
      },
      18
    );
  }, [stationId]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stationsData?.map((station) => (
        <Grid
          className="iframe animate__animated animate__animate__flash animate__delay-1s 
          animate__slower	3s "
          component="div"
        >
          <Marker
            position={[station.latitud, station.longitud]}
            key={station.id}
            eventHandlers={{
              click: () => {
                changeStation(station.latitud, station.longitud);
              },
            }}
          >
            <Popup>
              <TextComponentPopup
                title={"Estación: "}
                description={`${station.id}`}
              />

              <br />
              <TextComponentPopup
                title={"Dirección: "}
                description={`${station.direccion}`}
              />
              <br />
              <TextComponentPopup
                title={"Localidad: "}
                description={`${station.localidad}`}
              />
              <br />
              <TextComponentPopup
                title={"Temperatura: "}
                description={`${station.temperatura}`}
              />
              <br />
              <TextComponentPopup
                title={"Humedad: "}
                description={`${station.humedad}`}
              />
              <br />
              <TextComponentPopup
                title={"Precipitación: "}
                description={`${station.precipitacion}`}
              />
              <br />
              <TextComponentPopup
                title={"Direccion del viento: "}
                description={`${station.direcc_viento}`}
              />
              <br />
              <TextComponentPopup
                title={"Velocidad del viento: "}
                description={`${station.veloc_viento}`}
              />
            </Popup>
          </Marker>
        </Grid>
      ))}
    </>
  );
};

export default IndexMapStations;
