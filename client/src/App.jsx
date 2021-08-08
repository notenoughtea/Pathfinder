import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import MainGreeting from './components/MainGreeting.js/MainGreeting';
// import MapCont from './components/MapContainer/MapCont';
 import MapContainer from "./components/MapContainer/MapContainer"


function App() {
  return (
    <>
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
    </>


export default App;
