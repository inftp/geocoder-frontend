import React, {useState} from 'react';
import './App.css';

import Burger from './components/Burger';
import SideMenu from './components/SideMenu';
import SearchContainer from './components/SearchContainer';
import LeafletMap from './components/LeafletMap';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
      <div className="App">

        {/* <header className="App-header">
        </header> */}
        <LeafletMap init={{lat: -37.815018, lng: 144.946014, zoom: 13}} />
        <Burger action={() => setMenuVisible(true)} />
        <SideMenu visible={menuVisible} close={() => setMenuVisible(false)} >
          <SearchContainer selection={(res) => console.log({res})}/>
        </SideMenu>

      </div>
  );
}

export default App;
