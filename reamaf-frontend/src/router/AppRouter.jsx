import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainComponentMaps from "../pages/mapa/components/MainComponentMaps";
import MainComponentStations from "../pages/stations/components/MainComponentStations";
import MainComponentStatistics from "../pages/statistics/components/MainComponentStatistics";

const AppRouter = () => {
  return (
    <Routes>
      {/* Pagina de mapas */}
      <Route path="maps" element={<MainComponentMaps />} />
      <Route path="stations" element={<MainComponentStations />} />
      <Route path="statistics" element={<MainComponentStatistics />} />

      <Route path="/*" element={<Navigate to="/maps" />} />
    </Routes>
  );
};

export default AppRouter;
