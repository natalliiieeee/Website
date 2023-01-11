import React from 'react'
import HeroImage from '../assets/heroImage.JPG'
import bgImage from '../assets/bgImage.jpg'


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen bg-center bg-cover bg-image-opacity-50 bg-image  "
    
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-black">
          About Me
        </h2>
        <p className="text-black py-4 max-w-md">
          Great bs
        </p>
        </div>
      </div>
    </div>
    
  )
}

export default Home