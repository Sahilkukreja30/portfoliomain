

import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function ComputersCanvas (props) {
  const modelRef = useRef()
  // const vsTexture = useTexture("/assets/vscode.jpg")
  const { scene } = useGLTF('/gaming_desktop_pc_blend_file.glb');
  useEffect(()=>{
    gsap.to(modelRef.current.scale,{
      x:1.6,
      y:1.6,
      z:1.6,
      duration:5,
      scrollTrigger:{
        trigger:".container-animation",
        start:"0",
        scrub:true,
      }
    })
  })
  return (
    <primitive object={scene} {...props} ref={modelRef} />
  )}
