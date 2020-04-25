import React, {useState} from 'react';
import './App.css';

import Burger from './components/Burger';
import SideMenu from './components/SideMenu';
import SearchContainer from './components/SearchContainer';
import LeafletMap from './components/LeafletMap';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  let dest: {lat: number, lng: number} | null;
  let setDest: any;
  [dest, setDest] = useState(null);

  const handleLocation = (location: {
    address: string,
    lat: number,
    lng: number
  }) => {
    const {lat, lng} = location;
    setMenuVisible(false);
    setDest({lat, lng}); 
  }

  return (
      <div className="App">

        {/* <header className="App-header">
        </header> */}
        <LeafletMap init={{lat: -37.815018, lng: 144.946014, zoom: 13}} dest={dest} />
        <Burger action={() => setMenuVisible(true)} />
        <SideMenu visible={menuVisible} close={() => setMenuVisible(false)} >
          <SearchContainer selection={(res) => handleLocation(res)}/>
        </SideMenu>

      </div>
  );
}

export default App;
