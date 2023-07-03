import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Logo from './Logo'
// import { BrowserRouter as Router ,Routes , Route,useParams} from "react-router-dom"
import MainMenu from './MainMenu'
const Navbar = () => {

  const options = [
    { title: 'Hostel Admission', link: '/' },
    { title: 'Council Election 2023-25', link: '/about' },
    { title: 'CET LMS ', link: '/services' },
    { title: 'CET LMS', link: '/products' },
    { title: 'ICCC2023', link: '/contact' },
    { title: 'IMPACTS 2023', link: '/blog' },
    { title: 'Library', link: '/gallery' },
    { title: 'NIRF', link: '/faq' },
    { title: 'Tenders', link: '/team' },
    { title: 'Alumni', link: '/testimonials' },
    { title: 'Contact Us', link: '/support' }
  ];

  const [icon ,setIcon]=useState(false);
  function toggle(){
    setIcon((e)=>!e)
  }
  return (
    <div>
    <nav className=" bg-gray-800">
     

      <ul className="hidden md:flex items-center justify-between py-4 px-6 bg-gray-800">
        {options.map((option, index) => (
          <li key={index}>
            <Link
              to={option.link}
              className="text-white hover:text-gray-300 text-sm font-medium px-2 py-1 rounded-md"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>

     <div className="block  ">
      <button className="sm:visible md:hidden text-white" onClick={toggle}><MenuOpenIcon />TOP MENU</button>
      <button className="sm:visible md:hidden text-white  "><MenuOpenIcon/>Main Menu</button></div>
     {icon&&   <ul className="  block items-center justify-between py-4 px-6bg-gray-800">
        {options.map((option, index) => (
          <li key={index}>
            <Link
              to={option.link}
              className="text-white hover:text-gray-300 text-sm font-medium px-2 py-1 rounded-md"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul> }
    </nav>
    <Logo />
    <MainMenu />
    </div>
  );
};

export default Navbar;

