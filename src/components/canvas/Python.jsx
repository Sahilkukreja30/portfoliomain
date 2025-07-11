import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const PythonLogo = (props) => {
    const modelRef = useRef()
    const {scene} = useGLTF('/python.glb')
    useEffect(()=>{
      gsap.to(modelRef.current.position,{
        z:10,
        duration:5,
        scrollTrigger:{
          trigger:".container-animation",
          start:"top top",
          scrub:true,
       
        }
      })
      gsap.to(modelRef.current.rotation,{
        y:10,
        duration:5,
        scrollTrigger:{
          trigger:".container-animation",
          start:"top top",
          scrub:true,
    
        }
      })
    })
  return (
    <primitive object={scene} {...props} ref={modelRef} />
  )
}

export default PythonLogo