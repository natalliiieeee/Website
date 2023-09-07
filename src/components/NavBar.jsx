import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react';
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "Resume",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
   
    <div className="flex justify-between items-center w-full h-10 px-4 text-white bg-white sticky top-0 z-40">
     
        <div>
          <h1 className='text-5xl  ml-2'> Natalie </h1>
        </div>
       
        <ul className="hidden md:flex absolute right-20 ">
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-110 duration-200'> <Link to="home" spy={true} smooth={true}>Home</Link></li>
        
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-110 duration-200'><Link  to="projects" spy={true} smooth={true}>Projects</Link>  </li>
          
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-110 duration-200'> <Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-110 duration-200'> < Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
       
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-20 text-gray-700 lg:invisible md:invisible sm:visible'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
            
           
              
       <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-br  from-zinc-900 to-cyan-500 z-10 sm:invisible'>
      
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'> <Link  to="home" spy={true} smooth={true}>Home</Link></li> 
             
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'><Link  to="projects" spy={true} smooth={true}>Projects</Link> </li>
          
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'> <Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'>< Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
       
       </ul>
       )} 
    </div>
  )
}



export default NavBar