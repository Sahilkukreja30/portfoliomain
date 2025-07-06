import React, { Suspense, useEffect, useRef, useState } from "react";
import { myProjects } from "../constants/index";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loader";
import ProjectComp from "./canvas/ProjectComp";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Works = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();
  const arrowRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currProject = myProjects[selectedIndex];

  useEffect(() => {
    // Clear text content to avoid any extra start points
    if (triggerRef.current) {
      triggerRef.current.textContent = "";

      // Typewriter animation with ScrollTrigger
      gsap.to(triggerRef.current, {
        text: "Projects",
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 75%", // Trigger animation when top of text is at 75% of viewport height
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      });
    }
  }, []);

  const handleClick = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const mouseEnter = () => {
    gsap.to(arrowRef.current, {
      rotate: 45,
      duration: 0.5,
    });
  };

  const mouseLeave = () => {
    gsap.to(arrowRef.current, {
      rotate: 0,
      duration: 0.5,
    });
  };

  return (
    <section className="c-space h-[120vh]" ref={sectionRef}>
      <div className="text-reveal">
        <p
          className={`${styles.heroHeadText} project text-center text-xl font-semibold text-white font-generalsans`}
          ref={triggerRef}
        ></p>
        <span></span>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5">
        {/* Project Details */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-2xl font-semibold">{currProject.title}</p>
            <p>{currProject.desc}</p>
            <p>{currProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-between">
            <div className="flex items-center gap-3">
              {currProject.tags.map((tag, index) => (
                <div className="tech-logo" key={index}>
                  <img src={tag.path} alt="tech" />
                </div>
              ))}
            </div>

            <a
              href={currProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer z-10 gap-2 text-white-600"
            >
              <p>Check live site</p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="w-3 h-3"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                ref={arrowRef}
              />
            </a>
          </div>

          <div className="flex w-full h-full justify-between z-50">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleClick("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleClick("next")}
            >
              <img src="/assets/right-arrow.png" alt="right arrow" />
            </button>
          </div>
        </div>

        {/* Project 3D Preview */}
        <div className="h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <ProjectComp texture={currProject.texture} />
              </Suspense>
            </Center>
            <OrbitControls
              enableRotate={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
