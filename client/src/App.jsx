import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { axiosCards } from './store/cardSlice';//+Roma ! вместо reduxToolki - store
import Cardlist from './components/Cardlist/Cardlist';//+Roma
import OneCard from './components/OneCard/OneCard';//+Roma
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
 import MapContainer from "./components/MapContainer/MapContainer"
import MenuAppBar from './components/Header/Header';
import NavBar from "./components/Navbar/NavBar";
import MainGreeting from "./components/MainGreeting/MainGreeting";
import PrivateRoom from "./components/PrivateRoom/PrivateRoom";

function App() {

  const { status, error } = useSelector(state => state.cards);//+Roma !
  const dispatch = useDispatch();//+Roma: вместо axios.get('/routes') !
  useEffect(() => {
    dispatch(axiosCards());
  }, []);

  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.089)'}}>
      <Router>
        <NavBar/>
        <MenuAppBar />
        <Switch>
          <Route exact path="/">
            <MainGreeting />
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <Cardlist />
            <MapContainer />
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
          <PrivateRoom/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
