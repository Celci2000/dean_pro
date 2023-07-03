import React  ,{useState} from 'react'
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router ,Routes , Route} from "react-router-dom"
// import Heading from './Heading.js'

function MainMenu(){
const [activeMenu , setActiveMenu] = useState(null)


// const toggleMenu = (menu)=>{

//     setActiveMenu(()=>activeMenu===null?menu:null)
// }


const [icon,setIcon] = useState(false)
function toggleIcon(){
    setIcon((e)=>!e)
}
return(
   <div>
   


   <nav className=" hidden md:block bg-red-800">
   <ul className="flex space-x-14 justify-center">
    <li className="relative">
        <Link to="/">
    <button onMouseEnter={()=>setActiveMenu('menu1')}  className="text-white  hover: text-gray-300 text-sm font medium  py-1 rounded-md focus:outline-none">  CET Home</button>
    </Link></li>

    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu2')}  onMouseLeave={()=>setActiveMenu('null')}  className="text-white  hover: text-gray-300 transitions hover:transition-ease-in-out transform hover:transform:1s duration-100 text-sm font medium px-2 py-1rounded-md focus:outline-none">  About Us</button>
     {activeMenu==='menu2' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu2')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2  bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className=" menu   px-4 py-2  bg-red-800 hover:bg-red-400 text-white  "> 
            <Link to="/dean">Dean Research</Link>
        </li>
        <li className=" menu px-4 py-2  bg-red-800 hover:bg-red-400 text-white"> 
            <Link to="/tech_officers">Technical Officers</Link>
        </li>
        <li className="menu px-4 py-2  bg-red-800 hover:bg-red-400 text-white"> 
            <Link to="/research_suprevisors">Research  Suprevisors</Link> 
        </li>
        <li className=" menu px-4 py-2  bg-red-800 hover:bg-red-400 text-white"> 
            <Link to="/research_scholars"> Reaserch  Scholars </Link>
        </li>
     </ul>)
    }
    </li>
    
    <li className="relative">
    <button  onMouseEnter= {()=>setActiveMenu('menu3')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium  rounded-md focus:outline-none">  Areas of Research</button>
     {activeMenu==='menu3' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu3')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2  bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2  menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">area1 </a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">area2</a>
        </li>
        <li className="px-4 py-2  menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">area3 </a>
        </li>
        <li className="px-4 py-2  menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">area4 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button   onMouseEnter= {()=>setActiveMenu('menu4')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium  rounded-md focus:outline-none">  Publications</button>
     {activeMenu==='menu4' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu4')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2   bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>

    <li className="relative">
    <button  onMouseEnter= {()=>setActiveMenu('menu5')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium  rounded-md focus:outline-none">Funded Projects</button>
     {activeMenu==='menu5' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu5')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2   bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2  menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>

     
    


    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu7')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium  rounded-md focus:outline-none">  Patents</button>
     {activeMenu==='menu7' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu7')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu8')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium   rounded-md focus:outline-none"> Collaborations</button>
     {activeMenu==='menu8' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu8')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2  menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 menu  bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu9')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium py-1 rounded-md focus:outline-none"> Forms</button>
     {activeMenu==='menu9' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu9')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-red-800 border border-red-800 rounded-md shadow-lg">
        <li className="px-4 py-2  menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 menu bg-red-800 hover:bg-red-400 text-white"> 
            <a href="/">2022-23</a>
        </li>
      
     </ul>)
    }
    </li>
    </ul>
   </nav>
   
   {/* <Heading /> */}
    </div>
   )
}
export default MainMenu