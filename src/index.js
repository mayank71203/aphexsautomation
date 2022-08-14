import React from 'react';
import  ReactDOM  from 'react-dom';
import NavBar from './navbar';
import Home from './Home';
import Intro from './Intro';
import Info from './info';
// import './index.css';


ReactDOM.render(
  <>
  <NavBar/>
  <Home/>
  <Intro/>
  <Info/>
  </>,
  document.getElementById('root')
);
