import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

import { Provider } from 'react-redux';
import store from './store';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './redux/reducers/rootReducer';
// import initState from './redux/initState';


axios.defaults.baseURL = 'http://127.0.0.1:3000';
// const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
