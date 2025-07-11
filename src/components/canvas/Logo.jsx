

import React, { useRef ,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function Logo(props) {
  const modelRef = useRef()
  useEffect(()=>{
    gsap.to(modelRef.current.position,{
      y:10,
      z:5,
      duration:5,
      scrollTrigger:{
        trigger:".container-animation",
        start:"top top",
        scrub:true,
       
      }
    })
    gsap.to(modelRef.current.rotation,{
      x:10,
      y:10,
      duration:5,
      scrollTrigger:{
        trigger:".container-animation",
        start:"top top",
        scrub:true,
      }
    })
  })
  const { scene } = useGLTF('/javascript_1.glb')
  return (
    <primitive object={scene} {...props} ref={modelRef} />
  )}
