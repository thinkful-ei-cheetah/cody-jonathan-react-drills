import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './state-drills/HelloWorld.js';
import RouletteGun from './state-drills/RouletteGun';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
ReactDOM.render(<RouletteGun />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
