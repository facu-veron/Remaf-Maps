import { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const LayersContext = createContext(null);

const LayersProvider = ({ children }) => {
  const [layer, setLayer] = useState('wind_new');

  const setNewLayer = (layer) => {
    setLayer(layer);
  };

  return (
    <LayersContext.Provider value={[layer, setNewLayer]}>
      {children}
    </LayersContext.Provider>
  );
};

const useLayer = () => useContext(LayersContext)[0];
const useSetLayer = () => useContext(LayersContext)[1];

export { useLayer, useSetLayer };
export default LayersProvider;
