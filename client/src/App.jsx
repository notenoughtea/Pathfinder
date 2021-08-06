import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import MainGreeting from './components/MainGreeting.js/MainGreeting';
// import MapCont from './components/MapContainer/MapCont';
 import MapContainer from "./components/MapContainer/MapContainer"
import MenuAppBar from './components/Header/Header';


function App() {
  return (
      <React.Fragment>
        <MenuAppBar/>
      <Switch>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/map">
        <MainGreeting/>
           <div className="App"/>
        <MapContainer/>
        </Route>
      </Switch>    
      </React.Fragment>
    
  )
}

export default App;
