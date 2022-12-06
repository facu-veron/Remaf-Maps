import { useReducer } from "react";
import { layerReducer } from "../pages/stateManagement/layerReducer";

export const useGetLayers = () => {
  const initialState = "clouds_new";
  const [layer, dispatch] = useReducer(layerReducer, initialState);

  const handleClickLayerWindSpeed = (layer) => {
    const action = {
      type: "case-wind-speed",
      payload: layer,
    };

    dispatch(action);

    console.log(" capa de viento", layer);
  };

  const handleClickLayerPrecipitation = (layer) => {
    const action = {
      type: "case-precipitation",
      payload: layer,
    };

    dispatch(action);
    console.log(" capa de precipitacion", layer);
  };

  const handleClickLayerTemperature = (layer) => {
    const action = {
      type: "case-temperature",
      payload: layer,
    };

    dispatch(action);
    console.log(" capa de temperatura", layer);
  };

  console.log("Desde useGetLayers", layer);

  return {
    layer,
    handleClickLayerWindSpeed,
    handleClickLayerPrecipitation,
    handleClickLayerTemperature,
  };
};
