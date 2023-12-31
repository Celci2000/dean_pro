import data from './data.js'
import {useParams} from 'react-router-dom'
function Suprevisor  (props){
  props.funcNav()
let {id}=useParams()
const user=data.find((e)=> e.id===parseInt(id))

    const {name,job,image,text}=user
    return(<div> 
       
        
        {
          console.log(id)
        }
        
        <h1 className="text-black flex item-center justify-center text-4xl capitalize">{name}</h1>

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
        <div className="flex flex-row mt-4 font-sans"> <img className="img mt-2"src={image}></img>
        <p className="">{text}
        <div className="flex flex-row mt-2"> <p className="font-bold text-1xl">Research:</p>
        <p>my interest lie in so and so</p></div>
        <div className="flex flex-row mt-2"> <p className="font-bold text-1xl">Email:</p>
        <p>billadnerson@gmail.com</p></div>
        </p>
     </div>
     <nav className="bg-blue-200 mt-4">
      <ul className="flex justify-start">
        <li className="mr-6  text-black text-2xl">
          Publications and Preprints
        </li>
        </ul>
        </nav>
     
    </div>)
}
export default Suprevisor
