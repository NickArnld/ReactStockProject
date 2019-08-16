import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Charts from './pages/Charts';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/chart/:symbol" component={Charts}/>
    </div>
  </Router>
);

export default App;
