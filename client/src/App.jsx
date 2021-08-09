<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 76ab0bc90afd9fbef7bf8453e501a658e09c0ac4
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { axiosCards } from './store/cardSlice';//+Roma ! вместо reduxToolki - store
import Cardlist from './components/Cardlist/Cardlist';//+Roma
import OneCard from './components/OneCard/OneCard';//+Roma
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
<<<<<<< HEAD
import MapContainer from "./components/MapContainer/MapContainer"
import NavBar from "./components/Navbar/NavBar";
=======
// import MapCont from './components/MapContainer/MapCont';
 import MapContainer from "./components/MapContainer/MapContainer"
import MenuAppBar from './components/Header/Header';
// import NavBar from "./components/Navbar/NavBar";
import MainGreeting from "./components/MainGreeting/MainGreeting";
>>>>>>> 76ab0bc90afd9fbef7bf8453e501a658e09c0ac4


function App() {

<<<<<<< HEAD
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
=======
  const { status, error } = useSelector(state => state.cards);//+Roma !
  const dispatch = useDispatch();//+Roma: вместо axios.get('/routes') !
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);

  return (
    <div>
      <Router>
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
>>>>>>> 76ab0bc90afd9fbef7bf8453e501a658e09c0ac4
}


export default App;
