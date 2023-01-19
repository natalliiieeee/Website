import React from "react";

import websiteprofile from "../assets/portfolio/websiteprofile.png";
import countrychanger from "../assets/portfolio/countrychanger.png";

const Projects = () => {
  return (
    <div  name="projects" className="relative bg-gray-50 py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-cyan-600 text-blue-800">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="flex justify-center w-6/12 text-5xl font-bold mx-auto border-b-4 border-black  sm:text-4xl sm:leading-10">
            Projects
          </h2>
          
        </div>
        <div className="mt-8 grid gap-16  pt-12 sm:grid-cols-1 md:grid-cols-2">

      
        <div className="relative rounded-md shadow-md ">
    <a href="https://github.com/natalliiieeee/Website">
        <img
        className="w-full object-cover rounded-md"
        src={websiteprofile}
        alt="Project 1"
        />
    
    <div className="absolute inset-0 p-6 opacity-0 bg-gradient-to-b to-teal-900 from-cyan-600 hover:opacity-100  rounded">
        <div className="relative">
        
        <h3 className="text-lg leading-6 font-medium text-white">
        Built a website using React JS, EmailJS and Tailwind CSS. 
        <br></br>
        Used Node JS Base Environment Setup.
        <br></br>
             Created a user-friendly website using GUI system.
             <br></br>
               Used next.js to create a server side rendering system.
        </h3>
        </div>
    </div>
</a>

          </div>

          <div className="relative rounded-md shadow-md">
            <a href="https://github.com/natalliiieeee/countryChangerApp">
              <img
                className="w-full rounded-md"
                src={countrychanger}
                alt="Project 2"
              />
            
            <div className="absolute inset-0 p-6 opacity-0 bg-gradient-to-b to-teal-900 from-cyan-600 hover:opacity-100  rounded">
              <div className="relative">
                <h4 className="text-lg leading-6 font-medium text-white">
                Used REST API to retrieve demographic and other data from the World Bank’s data repository, rendered the retrieved data or the processed data using appropriately selected visualization.
                </h4>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
