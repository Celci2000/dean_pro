
import React from 'react';
import './App.css';
import Logo from './Logo'
 import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import MainMenu from './MainMenu'
import Navbar from './Navbar.js'
function App() {
  return (
    <div>
      <Router>
      <Navbar />
    

      </Router>
      <Logo />

      <MainMenu />
     
    {/* <Router>
   
    {/* <Routes> 
      <Route path="/" exact element ={}></Route>
    </Routes>
    </Router> */} 
   

    </div>
  );
}

export default App;

