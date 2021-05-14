import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Project from './contents/Project';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
    <div className = "App">
	    <Navbar />
	     <Route exact path="/">
	    	<Home />
	     </Route>

	     <Route exact path="/About">
	        <About />
         </Route>

	     <Route exact path="/Education">
	        <Education />
	       </Route>
	         
	     <Route exact path="/Skills">
	        <Skills />
	     </Route>

          <Route exact path="/Project">
	        <Project />
	     </Route>

	     <Route exact path="/Contact">
	        <Contact />
	     </Route>

   </div>
   </Router>
  );
}

export default App;
