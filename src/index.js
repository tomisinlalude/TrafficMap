import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './store/reducers';

import './index.css';
import App from './Home';
require('dotenv').config();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
