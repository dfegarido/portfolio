import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import Default from './layout/Default';




ReactDOM.render(
  <Provider store={store}>
    <Default />
  </Provider>,
  document.getElementById('root')
);

