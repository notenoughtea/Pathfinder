import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import MapContainer from "./components/MapContainer/MapContainer"
import NavBar from "./components/Navbar/NavBar";


function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <MapContainer/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/lk">
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
