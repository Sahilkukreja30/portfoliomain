import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, Logo,ReactLogo,PythonLogo } from "./canvas";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload ,Float,PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "./Loader";
import { Suspense, useState } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const mainText = useRef()
  const subText = useRef()
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 10,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(mainText.current,{
      x:-500,
      duration:2.5,
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"0",
        scrub:true,
      }
    })
    gsap.to(subText.current,{
      opacity:0,
      y:+550,
      duration:2.5,
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"0",
        scrub:true,
      }
    })
    gsap.to(scrollRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "0",
        scrub: true,
      },
    });
  });
  return (
    <section className="h-screen w-full mx-auto relative" ref={sectionRef}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div>
          <div className="flex gap-5">
          <h1 className={`${styles.heroHeadText} font-generalsans`} ref={mainText}>
            Hi, I'm{" "}
          </h1>
          <span ref={textRef} className={`${styles.heroHeadText} font-generalsans`}>
              <span className="text-[#e54040]">Sahil</span>
            </span>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} ref={subText}>
            I am a web developer and <br className="sm:block hidden" />
            tech enthusiast
          </p>
        </div>
      </div>
      <div className="h-screen w-full container-animation">
      <Canvas
           
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0,0,20]}></PerspectiveCamera>
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ComputersCanvas
            position={isMobile ? [0.5, -4.5, 0] : [1, -4.5, 0]}
            scale={isSmall ? 0.3 : isMobile ? 0.8 : 1.2}
            rotation={[-3.9,-1.58,2.3]}
            />
            <pointLight intensity={10} position={[-2,-1,0]}/>
            <ambientLight intensity={1} />
            <directionalLight intensity={2} position={[10, 8, 10]} />
            <group>
              <Float speed={isMobile ? 0.5 : 1} floatIntensity={isMobile ? 0.5: 1}>
              <Logo position={isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0]} 
            scale={isMobile ? 0.05 : 0.07}
            rotation={[3.1,-3.7,-1.5]}/>
            <ReactLogo position={isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-20, -8, -10]} 
            scale={isMobile ? 0.5: 0.5}
            rotation={[3.1,-3.7,-1.5]}/>
            <PythonLogo position={isSmall ? [4, -5, 0] : isMobile ? [5, -6.5, 0] : isTablet ? [5, -5, 0] : [12, -5.5, 0]}
            scale={isMobile ? 0.03:0.04}
            rotation={[-0.1,-0.1,-3.3]}/>
              </Float>
            </group>
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
        

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" >
        <a href="#about" >
          <motion.div animate={{y:[0,12,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"loop"}} ref={scrollRef} className="w-[80px] h-[80px] flex justify-center items-center">
             <img src="/assets/minus1.svg" alt="Arrow down" className="h-[60px] w-[60px] mt-12" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
