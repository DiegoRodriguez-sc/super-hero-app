import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import { store } from './store/store';
import "./styles/base.css";

const HeroApp = () => {
 return (
  <Provider store={store}>
  <AppRouter />
  </Provider>
 );
}

export default HeroApp;
