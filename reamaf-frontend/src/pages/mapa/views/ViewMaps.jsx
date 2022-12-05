import { Grid, Paper } from "@mui/material";

import "animate.css";

import { useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGetLayers } from "../../../hooks/useGetLayers";
import { useEffect } from "react";

const ViewMaps = () => {
  const { url } = useGetLayers();

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
    <Grid component="div" item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 800,
        }}
      >
        <MapContainer
          style={{ height: 800 }}
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
