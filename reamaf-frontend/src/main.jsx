import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LayersProvider from './context/LayersProvider';
// import ViewMaps from './pages/mapa/views/ViewMaps';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayersProvider>
        <App />
      </LayersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
