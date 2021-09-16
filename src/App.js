import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Welcome from "./Welcome.js"
import About from './About.js'
import Contact from './Contact.js'
import Counter from './Counter.js'

import "./style.css";

 function App() {
  return (
    <Router>
      <h1> Hello </h1>
      <Welcome name="Sushnata"/>
      <nav>
        <ul>
        <li><Link to={'/about'} > About </Link></li>
        <li><Link to={'/contact'} >Contact</Link></li>
        <li><Link to={'/counter'}>Counter</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/counter' component={Counter}/>
      </Switch>
    </Router>
  );
}

export default App
