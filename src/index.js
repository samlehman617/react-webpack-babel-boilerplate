import React from 'react';
import ReactDOM from 'react-dom';

import Jsx from './components/jsx.jsx';

import './styles.scss';

const App = () => (
    <div className="app">
    <img alt="header" src="/dist/images/header.png" className="app-header" />
      <h2>Yoo! Start to build your app.</h2>
      <Jsx />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
