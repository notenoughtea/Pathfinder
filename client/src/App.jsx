import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { axiosCards } from './store/cardSlice';//+Roma ! вместо reduxToolki - store

import MapContainer from "./components/MapContainer/MapContainer"
import Cardlist from './components/Cardlist/Cardlist';//+Roma
import OneCard from './components/OneCard/OneCard';//+Roma
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import NavBar from "./components/Navbar/NavBar";
import MainGreeting from "./components/MainGreeting/MainGreeting";


function App() {

  const { status, error } = useSelector(state => state.cards);//+Roma !
  const dispatch = useDispatch();//+Roma: вместо axios.get('/routes') !
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MapContainer />
            <MainGreeting />
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <Cardlist />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/card/:id">
            <OneCard />
          </Route>
          <Route exact path="/lk">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
