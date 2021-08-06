import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';


axios.defaults.baseURL = "http://127.0.0.1:3000";
// const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
