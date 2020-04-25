import React from 'react';
import './App.css';

import SearchContainer from './components/SearchContainer';
import LeafletMap from './components/LeafletMap';

function App() {
  return (
      <div className="App">

        {/* <header className="App-header">
        </header> */}
        {/* /<SearchContainer /> */}
        <LeafletMap init={{lat: -37.815018, lng: 144.946014, zoom: 13}} />

      </div>
  );
}

export default App;
