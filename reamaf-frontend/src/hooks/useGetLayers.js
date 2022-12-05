import { useEffect, useState } from "react";

export const useGetLayers = () => {
  const [layer, setLayer] = useState("temp_new");

  const handleClickLayer = (layers) => {
    setLayer(layers);
  };

  let url = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=86f4f3c85850bbd081cb816d80ad14cc`;
  console.log(url);

  return {
    handleClickLayer,
    url,
  };
};
