<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';


axios.defaults.baseURL = 'http://127.0.0.1:3001';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './redux/reducers/rootReducer';
// import initState from './redux/initState';
>>>>>>> 7bdc7f7c3b1e754be27623fd871b26c98facc251

axios.defaults.baseURL = "http://127.0.0.1:3001";
// const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <App />
    </Router>
=======
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
>>>>>>> 7bdc7f7c3b1e754be27623fd871b26c98facc251
  </React.StrictMode>,
  document.getElementById("root")
);
