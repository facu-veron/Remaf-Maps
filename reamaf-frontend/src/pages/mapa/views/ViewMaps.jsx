import { Grid, Paper, Typography } from "@mui/material";

import "animate.css";

import { useEffect, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useContext } from "react";
import { LayerContext } from "../../../context/LayerContext";
//aca esta el infeliz

const ViewMaps = () => {
  const { layer } = useContext(LayerContext);
  let initialState = layer;

  console.log("initialState", initialState);
  const [layers, setLayers] = useState(initialState);

  console.log("layers", layers);
  useEffect(() => {
    setLayers(layer);
  }, [layer]);

  console.log("layer traido del context", layer);

  let url = `https://tile.openweathermap.org/map/${layers}/{z}/{x}/{y}.png?appid=86f4f3c85850bbd081cb816d80ad14cc`;

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  /* className="iframe animate__animated animate__fadeIn animate__delay-2s 
      animate__slower	3s animate__repeat-3" */
  return (
    <Grid component="div" item xs={12} md={8} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 1000,
        }}
      >
        <MapContainer
          style={{ height: 1000, width: "auto" }}
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={url}
          />
          <LocationMarker />
        </MapContainer>
      </Paper>
    </Grid>
  );
};

export default ViewMaps;
