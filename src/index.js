import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import Default from './layout/Default';


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <Default />
  </Provider>
);

