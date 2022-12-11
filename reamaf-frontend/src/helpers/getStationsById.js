import { stationsData } from "../data/stationsData";

export const getStationsById = (id) => {
  return stationsData.find((station) => station.id === id);
};
