import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useLayer } from '../../../context/LayersProvider';
import L from 'leaflet';

function TileLayer({ layer }) {
  const map = useMap();
  let url = '';
  switch (layer) {
    case 'wind_new':
      url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      break;

    case 'precipitation_new':
      url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      break;
    case 'temp_new':
      url =
        'https://c.tile.thunderforest.com/cycle/7/66/44.png?apikey=db5ae1f5778a448ca662554581f283c5';
      break;

    default:
      url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      break;
  }

  const layerSelected = L.tileLayer(url);
  map.addLayer(layerSelected);

  return null;
}

const IndexMap = () => {
  const layer = useLayer();

  const [position, setPosition] = useState({
    lat: '-26.18064675300086',
    lng: '-58.188628961794805',
  });
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.locate();
  }, []);

  return (
    <>
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      {/* <TileLayer url={`https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png`} /> */}

      <TileLayer layer={layer} />
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </>
  );
};

export default IndexMap;
