import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reducer, {initialState} from './Components/Reducer';
import {StateProvider} from './Components/StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={Reducer}>
    <App />
    </StateProvider>
);
