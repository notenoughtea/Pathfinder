import React from 'react'
// import MainGreeting from './components/MainGreeting.js/MainGreeting';
//  import Map from "./components/Map/Map"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { axiosCards } from './store/cardSlice';
import Cardlist from './components/Cardlist/Cardlist';
import OneCard from './components/OneCard/OneCard';

function App() {
  const { status, error } = useSelector(state => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);


  return (
    <div className="App">
      <Router>
      {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>}
          <Cardlist/>
        <Switch>
          
          {/* <MainGreeting/>
      <Map/> */}
          <Route exact path="/card/:id">
            <OneCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
