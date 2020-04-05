import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import App from './App';
import {createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>


, document.getElementById('root'));
