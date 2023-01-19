import React from "react";
import Lottie from "lottie-react";
import contactAni from "../assets/contactAni.json"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/Natalie.Au.resume.pdf";
import FileDownload from 'react-file-download';



  
const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/natalliiieeee",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/natalliiieeee",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:natalieaau@gmail.com",
    },
   
  ];

  return (
    
    <div
      name="contact"
      className=" justify-center w-full h-screen bg-gradient-to-b from-cyan-300 to-cyan-50 p-4 text-blue-800" 
    > 
      <div className="flex flex-col p-40 justify-center max-w-screen-lg mx-auto h-full" >
        <div className="pb-20">
          <p className="flex justify-center text-5xl font-bold  border-b-4 border-black">
         
            Contact Me
          </p>
 
        </div>
        
        <div className=" flex justify-center align-middle sm:px-6 ">
        <Lottie animationData={contactAni} loop={true} className="h-3/4"/>
          <form
            action="https://getform.io/f/9bd87870-7365-4b47-8029-bf2478966e9b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 pb-20"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              
              className="p-2 bg-blue-200 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-blue-200 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-blue-200 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's chat
            </button>
          </form>
          </div>
        
          <view  className="flex items-center justify-center text-gray-400 ">
        <div className="mx-8 hover:cursor-pointer"> <a href={""}/>
        <FaGithub size={50} onClick={event =>  window.location.href='https://github.com/natalliiieeee'}/>GitHub
        
        
        </div>
        <div className="mx-8 hover:cursor-pointer">    
        <HiOutlineMail size={50} onClick={event => window.location.href='mailto:natalieaau@gmail.com'}/>Email
        </div>
        <div className="mx-8 hover:cursor-pointer">        
        <FaLinkedin size={50} onClick={event =>  window.location.href='https://linkedin.com/in/natalliiieeee'}/>Linkedin
        </div>
        <div className="mx-5 hover:cursor-pointer ">    
        <FaDownload size={50} onClick={() => FileDownload(resume, 'Natalie.Au.resume.pdf')}/>Resume
        </div>   </view> 
      </div>
    </div>
   
  );
};


export default Contact;