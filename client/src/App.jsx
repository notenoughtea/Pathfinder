import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import MainGreeting from './components/MainGreeting.js/MainGreeting';
// import MapCont from './components/MapContainer/MapCont';
import MapContainer from "./components/MapContainer/MapContainer"

import { axiosCards } from './store/cardSlice';//+Roma
import Cardlist from './components/Cardlist/Cardlist';//+Roma
import OneCard from './components/OneCard/OneCard';//+Roma


function App() {

  const { status, error } = useSelector(state => state.cards);//+Roma
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/map">
          <MainGreeting />
          <div className="App" />
          <MapContainer />
        </Route>
        <Route exact path="/card/:id">
          <OneCard />
        </Route>
        <Route exact path="/cardlist">
          {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>}
          <Cardlist />
        </Route>
      </Switch>
    </div>
 );
}

export default App;
