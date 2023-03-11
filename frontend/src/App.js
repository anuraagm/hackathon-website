import './App.css';
import { useState } from 'react';
import MapComponent from './Components/MapComponent/MapComponent';
import DetailsComponent from './Components/DetailsComponent/DetailsComponent';

function App() {
  
  const [location, setLocation] = useState();

  return (
    <div className="App grid grid-cols-2">
      <MapComponent className="col-start-1" location={location}></MapComponent>
      <DetailsComponent className="col-start-2" location={location} setLocation={setLocation}></DetailsComponent>
    </div>
  );
}

export default App;
