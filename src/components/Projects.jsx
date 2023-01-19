import React from "react";

import websiteprofile from "../assets/portfolio/websiteprofile.png";
import countrychanger from "../assets/portfolio/countrychanger.png";


const Projects = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//   ];

  return (
    <div
      name="projects"
      className=" w-full h-screen top-0 bg-gradient-to-b from-zinc-900 to-cyan-600 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-5xl font-bold inline border-b-9 border-gray-500">
            Projects
          </p>
  
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-9 px-20 sm:px-0">
         
            <div className="shadow-md shadow-gray-600 rounded-lg bg-gray-500 hover:scale-105">
              <a href="https://github.com/natalliiieeee/Website">
              <img
                src={websiteprofile}
                
                alt=""
                className="rounded-md duration-200 hover:translate-y-4 z-10"
              /></a>
              <p className="text-center rounded-md bg-gradient-to-b to-teal-700 from-cyan-400 opacity-0 hover:opacity-100 duration-100 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white  font-semibold">	Built a website using React JS, EmailJS and Tailwind CSS. Used Node JS Base Environment Setup.
              Created a user-friendly website using GUI system.
              Used next.js to create a server side rendering system.
              </p>
              
            </div>
            <div className=" shadow-md shadow-gray-600 rounded-lg bg-gray-500 hover:scale-105 ">
            <a href="https://github.com/natalliiieeee/countryChangerApp">
              <img
                src={countrychanger}
                
                alt=""
                className="rounded-md duration-200 "
              /></a>
              <p className=" text-center rounded-md bg-gradient-to-b to-teal-700 from-cyan-400 opacity-0 hover:opacity-100 duration-100 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">	Used REST API to retrieve demographic and other data from the World Bank’s data repository, rendered the retrieved data or the processed data using appropriately selected visualization.</p>
              
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
