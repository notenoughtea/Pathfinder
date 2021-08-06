import React from 'react'
import MainGreeting from './components/MainGreeting.js/MainGreeting';
// import MapCont from './components/MapContainer/MapCont';
 import MapContainer from "./components/MapContainer/MapContainer"
  
  


  function App() {
  return (
<div>
<div>
    <MainGreeting/>
    </div>
    <div className="App">
    <MapContainer/>
    </div>
  </div>

  );
  }

export default App;
