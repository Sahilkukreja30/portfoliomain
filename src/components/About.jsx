import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants/index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function About() {
  const [copyState, setCopyState] = React.useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("sahilkukreja4321@gmail.com");
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(aboutRef.current, {
        opacity: 0,
        y: 60,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, aboutRef);
    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.classList.add("active");
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.classList.remove("active");
  };
  return (
    <section className="mt-5 xl:h-[170vh]">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 xl:grid-rows-5 grid-cols-1 gap-5 h-full" ref={aboutRef}>
        <div
          className="xl:row-span-2 grid-container1 card1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid-container">
            <img
              src="\assets\main.jpg"
              alt="grid 1"
              className="w-fit sm:h-[276px] mb-4 h-fit object-contain rounded-full self-center"
            />
            <div>
              <p className="text-xl font-semibold text-white font-generalsans">
                Hi, <b>I'm Sahil Kukreja!</b>
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                A curious Web Developer and Tech Enthusiast who loves building
                innovative, efficient, and scalable solutions.
              </p>
            </div>
          </div>
        </div>

        <div
          className="card2 xl:row-span-2 grid-container1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center">
              <Globe
                height={250}
                width={250}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat:22.719568,
                  lng:75.857727,
                  size: 100,
                  text: "Indore, India",
                }]} 
              />
            </div>
            <p className="text-xl font-semibold text-white font-generalsans">
              I'm from India
            </p>
            <p className="text-[#afb0b6] text-base font-generalsans">
              Based in heart of India, Indore where foody people live. My
              hobbies include playing cricket watching anime and
              travelling,Always ready to interect and build network.
            </p>
          </div>
        </div>
        <div
          className="grid-container1 xl:row-span-2 card3"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid-container">
            <p className={"text-3xl font-semibold text-center text-white project"}>Technical Skills</p>
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {technologies.map((tech) => (
                <div className="w-24 h-24 mt-6" key={tech.name}>
                  <BallCanvas icon={tech.icon}></BallCanvas>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="xl:row-span-2 grid-container1 card4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid-container">
            <img
              src="\assets\grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-full object-cover sm:object-top"
            />
            <div>
              <p className="text-center mt-16 text-[#afb0b6] text-base font-generalsans">
                Contact me
              </p>
              <div className="copy-container" onClick={handleClick}>
                <img
                  src={copyState ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-[#afb0b6] ">
                  sahilkukreja4321@gmail.com
                </p>
              </div>
              <div className="flex gap-10 justify-center items-center w-full h-[100px]">
                <a href="https://github.com/Sahilkukreja30" target="_blank">
                  <img
                    src="/assets/github.svg"
                    alt="github"
                    className="w-full h-[40px] object-cover"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sahilkukreja_30/"
                  target="_blank"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt="github"
                    className="w-full h-[40px] object-cover"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-kukreja-943993289/"
                  target="_blank"
                >
                  <img
                    src="/assets/linkedin.svg"
                    alt="github"
                    className="w-full h-[38px] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-space text-center"></div>
    </section>
  );
}

export default SectionWrapper(About, "about");
