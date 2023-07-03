import React from 'react';
function Dean(props){
    props.funcNav();
    return (<div>
       <h1 className="text-black text-2xl font-bold capitalize flex justify-center ">Dr.Sumesh Divakaran</h1>
       <nav className="bg-blue-500 mt-4">
      <ul className="flex justify-start py-2 px-2">
        <li className="mr-6  hover:bg-blue-200  hover: rounded-md">
          <a href="#" className="text-white  hover:text-black ">Home</a>
        </li>
        <li className="mr-6  hover:bg-blue-200  hover: rounded-md">
          <a href="#" className="text-white hover:text-black">Publications</a>
        </li>
        <li className="mr-6  hover:bg-blue-200  hover: rounded-md">
          <a href="#" className="text-white hover:text-black">Seminars</a>
        </li>
        <li className=" hover:bg-blue-200  hover: rounded-md">
          <a href="#" className="text-white hover:text-black ">Contact</a>
        </li>
      </ul>
    </nav>
    
       <div className="flex flex-row mt-4 font-sans space-x-4 "> <img className="img "src="https://www.cet.ac.in/wp-content/uploads/2021/06/Sumesh-Divakarannew.jpg"></img>
        <p className="">hggffgdfhgukhkfddfcgvbhbjj
        <div className="flex flex-row mt-2"> <p className="font-bold text-1xl">Research:</p>
        <p>my interest lie</p></div>
        <div className="flex flex-row mt-2"> <p className="font-bold text-1xl">Email:</p>
        <p>billadnerson@gmail.com</p></div>
        </p>
     </div>
     <nav className="bg-blue-200 mt-4 ">
      <ul className="flex justify-start">
        <li className="mr-6  text-black text-2xl">
          Publications and Preprints
        </li>
        </ul>
        </nav>
      
    </div>)
}
export default Dean;