import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
// import MapCont from './components/MapContainer/MapCont';
 import MapContainer from "./components/MapContainer/MapContainer"
import NavBar from "./components/Navbar/NavBar";
import axios from "axios";
import setMarkersList from "./components/MapContainer/MapContainer"

// useEffect(()=>{
//   axios.get('/routes')
//   .then(response => setMarkersList(response.data))
// },[])

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
            <MapContainer/>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/lk">
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
