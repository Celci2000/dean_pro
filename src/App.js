
import React, { useState } from 'react';
import './App.css';
import Logo from './Logo'
import { BrowserRouter as Router ,Routes , Route,useParams} from "react-router-dom"
import MainMenu from './MainMenu'
import Navbar from './Navbar.js'
import ResearchSuprevisors from './ResearchSuprevisors.js'
import ResearchScholars from './ResearchScholars.js'
import Home from './Home'
import Dean from './Dean'
import TechOfficers from './TechOfficers'
import data from './data.js'
import Suprevisor from './Suprevisor.js'
function App() {
 const [showNav , setShowNav] = useState(true)
 function noShow(){
  setShowNav(false);
 }
  return (
    <div className="flex flex-col  ">
      <Router>
      {showNav &&<Navbar />}
    
      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/dean" element={<Dean  funcNav={noShow} />}></Route>
        <Route exact path="/tech_officers" element={<TechOfficers funcNav={noShow}  />}></Route>
        <Route exact path="/research_suprevisors" element ={<ResearchSuprevisors/>}></Route>
        <Route  path="/research_scholars" element ={<ResearchScholars />}></Route>
       
        <Route  path="/research_suprevisors/:id" element={<Suprevisor funcNav={noShow} />}>

        </Route>
    </Routes>
    
      
     {/* <footer className="footer bg-red-800 text-white  flex justify-center   w-full ">Copyright 2023 College of Engineering Trivandrum</footer> */}
      </Router>
      
     
   
   </div>
  );
}

export default App;

