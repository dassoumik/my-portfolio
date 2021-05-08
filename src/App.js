import React from 'react';
import './App.css';
import Home from './pages/Home';
import Media from 'react-media';

import {
  Switch,
  Route
} from "react-router-dom";

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route path="/blogs" component={Blogs}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
 
    </div>
  );
}

export default App;
