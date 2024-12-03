import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Provider} from 'react-redux';
import store from './store'
import './index.css';
import Footer from './Footer/footer';
import Routing from './routing/routing';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routing />
    <Footer/>
  </Provider>
);

