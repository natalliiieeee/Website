import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Contact from './components/contact';
import Resume from './components/resume';



function App() {
  return (
    <div >  
      
      <NavBar />
    
      <Home />
      <Projects /> 
     <Resume />
      <Contact />
      
      <SocialLinks />

    
    </div>
  );
}
export default App;
