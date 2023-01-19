   
    import React, { useState, useEffect } from 'react';
    import HeroImage from '../assets/heroImage.JPG'
    import Typewriter from 'typewriter-effect';
    import stars from '../assets/Stars-6962.mp4';


    const Home = () => {
    return (
        
        
         <div name= "home "> 
         <video src={stars} muted loop autoPlay className=" absolute left-0 top-10 w-full h-full object-cover bg-scroll z-0 "> </video>
        <div class="relative group ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row " >
                
                <div className="flex flex-col justify-center h-screen">
                {/* <div className="bg-auto   bg-white/3 backdrop-blur-sm"></div> */}
                
                <h2 className="text-4xl sm:text-7xl font-bold text-white  ">About 
                <Typewriter
                    options={{
                        strings: ['Me','Natalie Au'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h2> 
                <p className="text-white py-4 max-w-md text-xl">
                Hello, my name is Natalie! I am a third year computer science student at York Univeristy. I am from Vancouver BC and love learning new technology. One of my passions include educating the next generation of technology users.

                </p>
                </div>
                <img  src={HeroImage} alt='myphoto'className='rounded-2xl mx-auto mx-8 object-scale-down h-96'/>
            </div>
        </div>
        </div>

        )

    }

    export default Home