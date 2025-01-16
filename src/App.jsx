import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Hero,Navbar,Works,StarsCanvas,CustomCursor} from '../src/components';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';




function App() {
  return (
    <BrowserRouter>
      <div className="hero-pattern relative z-0" id='smooth-content'>
        <Navbar />
        <Hero />
        <About />
        <Works />
        <CustomCursor />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
