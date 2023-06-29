import React, { useState }  from "react"
import {Link} from "react-router-dom"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Suprevisor from './Suprevisor.js'
import data from './data.js'
function ResearchSuprevisors(){
    const [list,setList]= useState(data);
    console.log("hii");
    return(
    <div className=" sm:flex md:grid grid-cols-4 gap-4 mx-16">
        
       
      {list.map((e)=>{
      <Router>
      <Routes> 
      <Route exact path="/research_suprevisors/:id" element={<Suprevisor props={e} />}>

       </Route>
       </Routes>
       </Router>
        return(
         
          <Link to={`/research_suprevisors/${e.name}`}><div className="text-black px-4 py-2  "> 
        <article  className="px-2 py-2 mt-2 mb-2 font-normal  capitalize font-sans max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <img  src={e.image} className="img  border-8 border-gray-800 rounded-t-md"></img>
            <p  className="mb-3 font-normal text-gray-700 dark:text-gray-400" ><h6> {e.name}</h6></p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.job}</p>
            </article>
        </div> </Link>)
      })}
   
    </div>
    )

}
export default ResearchSuprevisors