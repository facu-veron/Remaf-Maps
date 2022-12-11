import React, { useEffect, useState } from 'react';
import { Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
// import { getStationsById } from '../../../helpers/getStationsById';
import { stationsData } from '../../../data/stationsData';
import { getStationsById } from '../../../helpers/getStationsById';

// function UserLocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       console.log(e);
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>
//         <Title value="Estas aquí " />
//       </Popup>
//     </Marker>
//   );
// }

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
        <Marker
          position={[station.latitud, station.longitud]}
          key={station.id}
          eventHandlers={{
            click: (e) => {
              changeStation(station.latitud, station.longitud);
            },
          }}
        >
          <Popup>
            {`Nombre: ${station.nombre}`}
            <br />
            {`Localidad: ${station.localidad}`}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default IndexMapStations;
