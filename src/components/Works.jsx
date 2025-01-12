import React, { Suspense, useEffect, useRef } from 'react'
import { myProjects } from '../constants/index'
import { Canvas ,useLoader} from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/Loader'
import ProjectComp from './canvas/ProjectComp';
import { TextureLoader } from 'three';
import { SectionWrapper } from '../hoc'
import { styles } from '../styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Works = () => {
  const arrowRef = useRef();
  const [selectedIndex,setSelectedIndex] = React.useState(0);
  const currProject = myProjects[selectedIndex];
  const handleClick = (direction) =>{
    setSelectedIndex((prevIndex) => {
      if(direction === 'previous'){
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      }
      else{
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }})
  }
  const mouseEnter = ()=>{
    gsap.to(arrowRef.current,{
      rotate:45,
      duration:0.5,
    })
  }
  const mouseLeave = ()=>{
    gsap.to(arrowRef.current,{
      rotate:0,
      duration:0.5
    })
  }

  return (
    <section className='c-space mt-32'>
      <p className={`${styles.heroHeadText} text-center text-xl font-semibold text-white  font-generalsans`}>My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className='absolute top-0 right-0'>
            <img src={currProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl'/>
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-2xl font-semibold'>{currProject.title}</p>
            <p>{currProject.desc}</p>
            <p>{currProject.subdesc}</p>
          </div>
          <div className='flex flex-wrap gap-5 items-center justify-between'>
            <div className='flex items-center gap-3'>
              {currProject.tags.map((tag,index) => (
                <div className='tech-logo' key={index}><img src={tag.path} alt="tech" /></div>
              ))}
            </div>
            
            <a href={currProject.href} target='_blank' className='flex items-center cursor-pointer z-10 gap-2 text-white-600'>
              <p>Check live site</p>
              <img src="src/assets/arrow-up.png" alt="arrow up" className='w-3 h-3' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} ref={arrowRef} />
            </a>
          </div>
          <div className='flex items-center justify-between mt-7'>
            <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient;'><img src="src/assets/left-arrow.png" alt="left arrow" onClick={()=>handleClick('previous')}/></button>
            <button className='w-10 h-10 p-3 cursor-pointer z-10 active:scale-95 transition-all rounded-full arrow-gradient;'><img src="src/assets/right-arrow.png" alt="right arrow" onClick={()=>handleClick('next')} /></button>
          </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded lg h-96 md:h-full '>
          <Canvas>
            <ambientLight intensity={3}/>
            <directionalLight position={[10,10,5]}/>
              <Center>
                <Suspense fallback={<CanvasLoader/>}>
                    <group position={[0,-2.5,0]} scale={1.75} rotation={[0,6.3,0]}>
                      <ProjectComp texture = {currProject.texture}></ProjectComp>
                    </group>
                </Suspense>
              </Center>
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Works,"work");