import React from "react";
import { useGetLayers } from "../hooks/useGetLayers";
import { LayerContext } from "./LayerContext";

export const LayerProvider = ({ children }) => {
  const { layer } = useGetLayers();
  return (
    <LayerContext.Provider value={{ layer }}>{children}</LayerContext.Provider>
  );
};
