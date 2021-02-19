import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from '../App';
import * as serviceWorker from './serviceWorker';

async function getData(){
  let list = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
  list = await list.json();
  return list;
}

async function hydrate(){
    let list = await getData();
    ReactDOM.hydrate(<App list={list} />, document.getElementById('root'));
}

hydrate();
serviceWorker.register();
