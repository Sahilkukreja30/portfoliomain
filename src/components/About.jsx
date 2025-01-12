import { data } from "autoprefixer";
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { s } from "framer-motion/client";
import { BallCanvas } from './canvas'
import {technologies} from '../constants/index'
import { styles } from '../styles'

function About() {
  const [copyState, setCopyState] = React.useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("sahilkukreja4321@gmail.com");
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the card
    const y = e.clientY - rect.top; // Y position within the card

    // Update CSS variables for glow position
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.classList.add("active");
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.classList.remove("active"); // Remove the active class on mouse leave
  };
  return (
    <section className="c-space mt-20" >
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full shadow-card">
        <motion.div variants={fadeIn("right","spring",0.25,0.4)} className="col-span-1 xl:row-span-1 grid-container1" onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}>
            
            <div className="grid-container">
                <img
                  src="src\assets\main.jpg"
                  alt="grid 1"
                  className="w-fit sm:h-[276px] mb-3 h-fit object-contain rounded-full self-center"
                />
                <div>
                  <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                    Hi, <b>I'm Sahil Kukreja!</b>
                  </p>
                  <p className="text-[#afb0b6] text-base font-generalsans">
                    A curious Web Developer and Tech Enthusiast who loves
                    building innovative, efficient, and scalable solutions.
                  </p>
                  </div>
               
            

            </div>
            
            
        </motion.div>
        
        <motion.div variants={fadeIn("right","spring",0.45,0.4)} className="col-span-1 xl:row-span-1 grid-container1" onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}>
          
          <div className="grid-container">
          
          <div className="rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0,0,0,0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                />
              </div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
               I'm from India
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Based in Indore where foody people lives 
              </p>
         
              
            </div>
          
            
        </motion.div>
        <motion.div variants={fadeIn("right","spring",0.65,0.4)} className="xl:col-span-1 xl:row-span-1 grid-container1" onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}>
         
          <div className="grid-container">
          
          <img
                src="src\assets\grid3.png"
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain"
              />
              <p className="text-xl font-semibold text-white  font-generalsans">
                My Passion for coding
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through coding
              </p>
          
            </div>
     
            
          
        </motion.div>
        <motion.div variants={fadeIn("right","spring",0.85,0.4)} className="xl:row-span-1 grid-container1" onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}>
          
          <div className="grid-container">
         
          <img
                src="src\assets\grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div>
                <p className="text-center mt-12 text-[#afb0b6] text-base font-generalsans">
                  Contact me
                </p>
                <div className="copy-container" onClick={handleClick}>
                  <img
                    src={
                      copyState ? "src/assets/tick.svg" : "src/assets/copy.svg"
                    }
                    alt="copy"
                  />
                  <p className="lg:text-xl md:text-lg font-medium text-[#afb0b6] ">
                    sahilkukreja4321@gmail.com
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center w-full h-[100px]">
                  <a href="https://github.com/Sahilkukreja30" target="_blank"><img src="src/assets/github.svg" alt="github" className="w-full h-[40px] object-cover" /></a>
                  <a href="https://www.instagram.com/sahilkukreja_30/" target="_blank"><img src="src/assets/instagram.svg" alt="github" className="w-full h-[40px] object-cover" /></a>
                  <a href="https://www.linkedin.com/in/sahil-kukreja-943993289/" target="_blank"><img src="src/assets/linkedin.svg" alt="github" className="w-full h-[38px] object-cover" /></a>
                </div>
              </div>
              
              
            </div>
        
            
        </motion.div>
      </div>
      <div className='c-space text-center'>
      <p className={`${styles.heroHeadText} text-white background-masking`}>Tech Stack</p>
    </div>
    <motion.div variants={fadeIn("right","spring",0.5,0.8)} className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        <div className='w-28 h-28 mt-10' key={tech.name}>
          <BallCanvas icon={tech.icon}></BallCanvas>
        </div>
      ))}
    </motion.div>
    </section>
  );
}

export default SectionWrapper(About,"about");
