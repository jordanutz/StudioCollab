import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import App from './App';

// React Router
import {BrowserRouter} from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </PersistGate>
   </Provider>


, document.getElementById('root'));
