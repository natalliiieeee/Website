import React from "react";

import websiteprofile from "../assets/portfolio/websiteprofile.png";
import countrychanger from "../assets/portfolio/countrychanger.png";
import blockchainblog from "../assets/portfolio/blockchainweb.png"; 

const Projects = () => {
  return (
    <div name="projects" className="relative bg-gray-50 py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-cyan-300 text-blue-800">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="flex justify-center w-6/12 text-5xl font-bold mx-auto border-b-4 border-black sm:text-4xl sm:leading-10">
            Projects
          </h2>
        </div>
        <div className="mt-8 grid gap-16 pt-12 sm:grid-cols-1 md:grid-cols-2">
          {/* Project 1 */}
          <div className="relative rounded-md ">
            <a href="https://github.com/natalliiieeee/Website">
              <img
                className="w-full object-cover rounded-md"
                src={websiteprofile}
                alt="Project 1"
              />
              <div className="absolute inset-0 p-6 opacity-0 bg-cyan-600 hover:opacity-100  rounded">
                <div className="relative">
                  <h3 className="text-lg leading-6 font-medium text-white">
                  A single-page React-based web application that effectively showcases my wide range of skills, experience, and projects, while also ensuring cross-device compatibility through the integration of responsive design principles.
                  <br></br>Tech stack: JavaScript ,Typescript, Material-UI, CSS, Tailwind CSS
                   
                    
                  </h3>
                </div>
              </div>
            </a>
          </div>

          {/* Project 2 */}
          <div className="relative rounded-md ">
            <a href="https://github.com/natalliiieeee/countryChangerApp">
              <img
                className="w-full rounded-md"
                src={countrychanger}
                alt="Project 2"
              />
              <div className="absolute inset-0 p-6 opacity-0 bg-cyan-600 hover:opacity-100  rounded">
                <div className="relative">
                  <h4 className="text-lg leading-6 font-medium text-white">
                    Used REST API to retrieve demographic and other data from the World Bank’s data repository, rendered the retrieved data or the processed data using appropriately selected visualization.
                    Leveraging data stored in JSON format to dynamically generate graphical representations of chosen countries.
<br></br>Tech stack: Java, JFreeChart, Swing, AWT
                  </h4>
                </div>
              </div>
            </a>
          </div>

          {/* Project 3 - Blockchain Blog */}
          <div className="relative rounded-md ">
            <a href="<https://lba-blog.vercel.app/>">
              <img
                className="w-full rounded-md"
                src={blockchainblog}
                alt="Blockchain Blog"
              />
              <div className="absolute inset-0 p-6 opacity-0 bg-cyan-600 hover:opacity-100  rounded">
                <div className="relative">
                  <h4 className="text-lg leading-6 font-medium text-white">
                  Used typescript to create a web app for blog management, including reading, uploading, deleting, and commenting, with an efficient tag-based search functionality.
                  <br></br>Tech stack: Typescript, Tailwind CSS, Next.js, Post CSS, React router

                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
