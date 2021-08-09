import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
// import MapCont from './components/MapContainer/MapCont';

import { axiosCards } from './store/cardSlice';//+Roma
import Cardlist from './components/Cardlist/Cardlist';//+Roma
import OneCard from './components/OneCard/OneCard';//+Roma
 import MapContainer from "./components/MapContainer/MapContainer"
import NavBar from "./components/Navbar/NavBar";
import axios from "axios";
import setMarkersList from "./components/MapContainer/MapContainer"

// useEffect(()=>{
//   axios.get('/routes')
//   .then(response => setMarkersList(response.data))
// },[])

function App() {

  const { status, error } = useSelector(state => state.cards);//+Roma
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);

  return (
    <div>
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
        <Route exact path="/lk">
        </Route>
      </Switch>
      </Router>
    </div>
 );
}


export default App;
