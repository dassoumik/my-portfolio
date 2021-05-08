import React from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
 
} from "react-router-dom";

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter> */}
    {/* <Link to="/"/> 
    <Link to="/portfolio"/> 
    <Link to="/blogs"/> 
    <Link to="/contact"/>  */}

    {/* <React.Fragment> */}
      <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/portfolio" component={Portfolio}/>

      <Route path="/blogs" component={Blogs}/>
      {/* </Route> */}
      <Route path="/contact" component={Contact}/>
        
      
  </Switch>
  {/* </React.Fragment> */}

  {/* </BrowserRouter> */}
  {/* <SideNav name="Soumik Das"></SideNav> */}


    </div>
  );
}

export default App;
