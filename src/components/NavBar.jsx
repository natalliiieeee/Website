import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react';

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
      link: "resume",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className='text-5xl font-signature ml-2'> Natalie</h1>
        </div>

        <ul className="hidden md:flex absolute right-20">
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'> Home</li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'>Projects </li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'> Resume</li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'> Contact</li>
        </ul>
      
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-700'>
           <FaBars/>
        </div>
        {nav && (
       <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-br from-black to-gray-600'>
       <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'> Home</li>
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'>Projects </li>
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'> Resume</li>
          <li className='py-4 cursor-pointer capitalize  text-gray-300 hover:scale-110 duration-200 text-4xl'> Contact</li>
       
       </ul>
       )} 
    </div>
  )
}



export default NavBar