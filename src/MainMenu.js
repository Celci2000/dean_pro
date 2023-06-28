import React  ,{useState} from 'react'

function MainMenu(){
const [activeMenu , setActiveMenu] = useState(null)

// const toggleMenu = (menu)=>{

//     setActiveMenu(()=>activeMenu===null?menu:null)
// }



return(
   <div>
   <nav className="bg-red-800">
   <ul className="flex items-center justify-between">
    <li className="relative">
    <button onMouseEnter={()=>setActiveMenu('menu1')}  className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  CET Home</button>
    </li>

    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu2')}  onMouseLeave={()=>setActiveMenu('null')}  className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  About Us</button>
     {activeMenu==='menu2' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu2')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">Data Research</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">Technical Officers</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">Reaserch  Suprevisors </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">Reaserch  Scholars </a>
        </li>
     </ul>)
    }
    </li>
    
    <li className="relative">
    <button  onMouseEnter= {()=>setActiveMenu('menu3')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  Areas of Research</button>
     {activeMenu==='menu3' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu3')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">area1 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">area2</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">area3 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">area4 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button   onMouseEnter= {()=>setActiveMenu('menu4')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  Publications</button>
     {activeMenu==='menu4' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu4')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>

    <li className="relative">
    <button  onMouseEnter= {()=>setActiveMenu('menu5')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">Funded Projects</button>
     {activeMenu==='menu5' && (
     <ul  onMouseEnter= {()=>setActiveMenu('menu5')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>

      <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu6')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  Publications</button>
     {activeMenu==='menu6' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu6')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>


    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu7')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none">  Patents</button>
     {activeMenu==='menu7' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu7')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu8')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none"> Collaborations</button>
     {activeMenu==='menu8' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu8')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2021-22 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2020-21 </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2019-20 </a>
        </li>
     </ul>)
    }
    </li>
    <li className="relative">
    <button onMouseEnter= {()=>setActiveMenu('menu9')} onMouseLeave={()=>setActiveMenu('null')} className="text-white  hover: text-gray-300 text-sm font medium px-2 py-1rounded-md focus:outline-none"> Forms</button>
     {activeMenu==='menu9' && (
     <ul onMouseEnter= {()=>setActiveMenu('menu9')} onMouseLeave={()=>setActiveMenu('null')} className="absolute left-0  py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2023-24</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100"> 
            <a href="/">2022-23</a>
        </li>
      
     </ul>)
    }
    </li>
    </ul>
   </nav>
   
   
    </div>
   )
}
export default MainMenu