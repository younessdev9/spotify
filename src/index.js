import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <DataLayer initialeState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById('root')
);
