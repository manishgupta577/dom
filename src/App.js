import React from "react";
import './App.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';






function App() {
  return (
    <Router>
      
    <div>
     <Navbar/>
     <Switch>
     <Route exact path="/">
     <Home/>
     </Route>
     <Route path="/about">
     <About/>
     </Route>
     <Route path="/contact">
     <Contact/>
     </Route>
     <Route path="/project">
     <Project/>
     </Route>
     </Switch>
    </div>
    </Router>
    
   
  );
}

export default App;
