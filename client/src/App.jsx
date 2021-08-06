import React from 'react'
// import MainGreeting from './components/MainGreeting.js/MainGreeting';
//  import Map from "./components/Map/Map"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { axiosCards } from './store/cardSlice';
import Toplist from './components/Toplist/Toplist';


function App() {
  const { status, error } = useSelector(state => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCards());
  }, [dispatch]);


  return (
    <div className="App">
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <Toplist />
      {/* <MainGreeting/>
      <Map/> */}
    </div>
  );
}

export default App;
