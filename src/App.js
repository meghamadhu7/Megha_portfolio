import React from 'react';

import Hero from './Component/Hero';
import About from './Component/About';

import './App.css';

import Navbar from './Component/Navbar';

import Projects from './Component/Projects';
import Contact from './Component/Contact';



function App() {
    return (
        <div className="App">
        
            <Hero />
            <About />
           
            <css/>
     
            <Navbar/>
            <Projects/>
            <Contact/>
        

            
        </div>
        
    );
}

export default App;
