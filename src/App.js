
import React from 'react';
import './App.css';
import Logo from './Logo'
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import MainMenu from './MainMenu'
import Navbar from './Navbar.js'
import ResearchSuprevisors from './ResearchSuprevisors.js'
import ResearchScholars from './ResearchScholars.js'
import Home from './Home'
function App() {
  return (
    <div className="flex flex-col  ">
      <Router>
      <Navbar />
      <Logo />
      <MainMenu />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/research_suprevisors" element ={<ResearchSuprevisors/>}></Route>
        <Route exact path="/research_scholars" element ={<ResearchScholars />}></Route>
        
          
      </Routes>
      
     {/* <footer className="footer bg-red-800 text-white  flex justify-center   w-full ">Copyright 2023 College of Engineering Trivandrum</footer> */}
      </Router>
      
     
   
   </div>
  );
}

export default App;

