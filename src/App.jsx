import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Hero,Navbar,Works,StarsCanvas,CustomCursor} from '../src/components';
import { useEffect, useState } from 'react';




function App() {
  return (
    <BrowserRouter id="content-wrapper">
      <div className="hero-pattern relative z-0" id='smooth-content'>
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <CustomCursor />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App