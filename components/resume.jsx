import React from 'react'
import Stats from '../assets/resume.png'
function Resume() {
    return (
        <div
      name="resume"
      className=" bg-gradient-to-b from-cyan-600 to-cyan-300 p-4 text-blue-800"
    > 
      
        
          <p className=" flex justify-center w-6/12 text-5xl font-bold mx-auto border-b-4 border-black">
         
            Resume
          </p>
 <img  src={Stats} alt='resume 'className=' object-scale-down h-screen mx-auto my-auto  h-full object-fit: contain'/>
        </div>
        
       
      
    );
  }
  
  export default Resume;