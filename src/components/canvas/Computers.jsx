

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function ComputersCanvas (props) {
  const modelRef = useRef()
  const { nodes, materials} = useGLTF('/gaming_desktop_pc_blend_file.glb')
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
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1081.geometry}
        material={materials['Material.063_25']}
        position={[1.016, 0.406, 2.44]}
        rotation={[1.571, 1.493, -1.571]}
        scale={0.219}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1088.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.59, 0.473, 3.599]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.196}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1099.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.227, 0.535, 3.585]}
        rotation={[-Math.PI, 0, -2.978]}
        scale={0.196}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1102.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.91, 0.446, 5.675]}
        rotation={[-Math.PI, 0, 3.052]}
        scale={0.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1105.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.909, 0.446, 5.653]}
        rotation={[-Math.PI, 0, 3.052]}
        scale={0.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1108.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.925, 0.444, 5.654]}
        rotation={[-Math.PI, 0, 3.052]}
        scale={0.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1111.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.924, 0.444, 5.675]}
        rotation={[-Math.PI, 0, 3.052]}
        scale={0.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1114.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.408, 0.506, 5.689]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1117.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.41, 0.506, 5.52]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1120.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.41, 0.506, 5.32]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1123.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.41, 0.506, 5.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1126.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.41, 0.506, 4.981]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1129.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.41, 0.506, 4.808]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1132.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.41, 0.506, 4.636]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1135.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.41, 0.506, 4.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1138.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.416, 0.509, 4.28]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1141.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.421, 0.51, 4.092]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1144.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.58, 0.485, 5.62]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1147.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.58, 0.484, 5.439]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1150.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.58, 0.484, 5.282]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1153.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.58, 0.484, 5.096]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1156.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.58, 0.484, 4.943]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1159.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.567, 0.486, 5.94]}
        rotation={[-0.017, Math.PI / 2, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1162.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.926, 0.456, 5.948]}
        rotation={[-Math.PI / 2, 1.451, Math.PI / 2]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1165.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.58, 0.484, 4.76]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1168.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.572, 0.484, 4.556]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.064, 0.064, 0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1171.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.58, 0.484, 4.413]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1174.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.59, 0.486, 4.221]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.069}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1177.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.22, 0.539, 5.949]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1180.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.755, 0.473, 4.839]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1183.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.755, 0.473, 5.019]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1186.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.755, 0.473, 5.191]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1189.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.755, 0.473, 5.37]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1192.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.755, 0.472, 5.547]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1195.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.755, 0.473, 4.68]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1198.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.755, 0.473, 4.503]}
        rotation={[-1.571, 1.471, 1.571]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1201.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.224, 0.539, 5.781]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1204.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.221, 0.539, 5.612]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1207.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.27, 0.53, 5.606]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1210.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.926, 0.456, 3.599]}
        rotation={[-Math.PI / 2, 1.451, Math.PI / 2]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1213.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.563, 0.469, 3.634]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1216.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.225, 0.539, 5.434]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1219.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.274, 0.531, 5.433]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1222.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.225, 0.537, 5.258]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1225.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.274, 0.529, 5.257]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1228.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.017, 0.564, 5.953]}
        rotation={[Math.PI / 2, 1.43, -Math.PI / 2]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1231.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.225, 0.539, 5.093]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1234.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.274, 0.53, 5.088]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1237.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.014, 0.561, 4.843]}
        rotation={[Math.PI / 2, 1.42, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1240.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.012, 0.569, 5.131]}
        rotation={[Math.PI / 2, 1.465, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1243.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.012, 0.569, 5.305]}
        rotation={[Math.PI / 2, 1.465, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1246.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.012, 0.569, 5.482]}
        rotation={[Math.PI / 2, 1.465, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1249.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.012, 0.569, 5.652]}
        rotation={[Math.PI / 2, 1.465, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1252.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.014, 0.562, 4.669]}
        rotation={[Math.PI / 2, 1.42, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1255.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.014, 0.562, 4.494]}
        rotation={[Math.PI / 2, 1.42, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1258.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.014, 0.562, 4.319]}
        rotation={[Math.PI / 2, 1.42, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1261.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.015, 0.561, 4.03]}
        rotation={[Math.PI / 2, 1.41, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1264.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.014, 0.562, 3.865]}
        rotation={[Math.PI / 2, 1.374, -Math.PI / 2]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1267.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.014, 0.562, 3.685]}
        rotation={[Math.PI / 2, 1.374, -Math.PI / 2]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1270.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.014, 0.562, 3.513]}
        rotation={[Math.PI / 2, 1.374, -Math.PI / 2]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1273.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.225, 0.539, 4.917]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1276.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.274, 0.53, 4.918]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1279.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.225, 0.538, 4.737]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1282.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.274, 0.53, 4.734]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1285.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.225, 0.539, 4.565]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1288.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.274, 0.53, 4.567]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1291.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.217, 0.541, 4.391]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={[0.038, 0.038, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1294.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.203, 0.542, 4.197]}
        rotation={[-1.571, -1.406, -1.571]}
        scale={[0.038, 0.038, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1297.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.274, 0.53, 4.394]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1300.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.274, 0.53, 4.216]}
        rotation={[Math.PI / 2, 1.406, -Math.PI / 2]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1303.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.861, 0.466, 2.194]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1306.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.735, 0.47, 5.855]}
        rotation={[-0.069, -0.001, 0]}
        scale={[0.062, 0.062, 0.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1309.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.75, 0.47, 4]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.067, 0.027, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1312.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.75, 0.47, 4.349]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.042, 0.027, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1315.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.761, 0.468, 5.844]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.019, 0.07, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1318.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.75, 0.47, 4.173]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.042, 0.027, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1321.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.262, 0.537, 2.531]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1324.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.222, 0.539, 2.712]}
        rotation={[Math.PI / 2, 1.356, -Math.PI / 2]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1327.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.923, 0.455, 2.6]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={0.044}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1330.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.97, 0.456, 2.61]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1333.geometry}
        material={materials['Material.097']}
        position={[1.848, 0.333, 6.012]}
        rotation={[-Math.PI, 0, -3.052]}
        scale={[0.05, 0.05, 0.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1336.geometry}
        material={materials['Material.097']}
        position={[1.646, 0.351, 2.05]}
        rotation={[0, 0, -0.089]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1339.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.894, 0.468, 4.889]}
        rotation={[-Math.PI / 2, 1.5, Math.PI / 2]}
        scale={[0.05, 0.116, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1342.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.404, 0.503, 2.677]}
        rotation={[Math.PI / 2, 1.494, -Math.PI / 2]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1345.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.452, 0.503, 2.7]}
        rotation={[Math.PI / 2, 1.494, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1348.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.452, 0.503, 2.349]}
        rotation={[Math.PI / 2, 1.494, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1351.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.571, 0.485, 4.086]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.067, 0.027, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1354.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.59, 0.485, 3.913]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.067, 0.027, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1357.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.404, 0.504, 2.505]}
        rotation={[Math.PI / 2, 1.494, -Math.PI / 2]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1360.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.588, 0.474, 3.581]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.037, 0.054, 0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1363.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.585, 0.474, 3.602]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1366.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.388, 0.505, 5.919]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1369.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.404, 0.504, 2.33]}
        rotation={[Math.PI / 2, 1.494, -Math.PI / 2]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1372.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.44, 0.501, 2.512]}
        rotation={[0.077, 0, 0]}
        scale={[0.025, 0.025, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1375.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.002, 0.563, 3.285]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1378.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.002, 0.563, 3.108]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1381.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.002, 0.563, 2.934]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1384.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.582, 0.485, 2.683]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.051, 0.025, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1387.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.623, 0.485, 2.68]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.032, 0.025, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1390.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.582, 0.485, 2.509]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.051, 0.025, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1393.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.582, 0.485, 2.332]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.051, 0.025, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1396.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.623, 0.485, 2.327]}
        rotation={[-1.555, 1.528, 1.555]}
        scale={[0.032, 0.025, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1399.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.918, 0.455, 2.359]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1402.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.4, 0.505, 5.927]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1405.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.417, 0.505, 5.857]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1408.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.405, 0.505, 5.848]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1411.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.923, 0.455, 4.023]}
        rotation={[-Math.PI / 2, 1.502, Math.PI / 2]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1414.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.923, 0.455, 3.78]}
        rotation={[-Math.PI / 2, 1.502, Math.PI / 2]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1417.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.921, 0.455, 4.224]}
        rotation={[-Math.PI / 2, 1.502, Math.PI / 2]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1420.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.761, 0.468, 5.816]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.019, 0.07, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1423.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.781, 0.468, 5.844]}
        rotation={[-3.073, 0, -Math.PI]}
        scale={[0.027, 0.07, 0.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1426.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.781, 0.468, 5.826]}
        rotation={[-3.073, 0, -Math.PI]}
        scale={[0.027, 0.07, 0.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1429.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.772, 0.468, 5.833]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.036, 0.07, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1432.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.735, 0.47, 3.674]}
        rotation={[0.007, -0.001, 0]}
        scale={[0.062, 0.062, 0.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1435.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.763, 0.471, 3.655]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.022, 0.062, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1438.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.763, 0.471, 3.623]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.022, 0.062, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1441.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.78, 0.471, 3.655]}
        rotation={[-3.073, 0, -Math.PI]}
        scale={[0.024, 0.062, 0.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1444.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.78, 0.471, 3.634]}
        rotation={[-3.073, 0, -Math.PI]}
        scale={[0.024, 0.062, 0.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1447.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.773, 0.471, 3.642]}
        rotation={[-1.571, 1.502, 1.571]}
        scale={[0.042, 0.062, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1450.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.222, 0.536, 3.587]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1453.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.222, 0.538, 3.285]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1456.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.222, 0.538, 3.111]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1459.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.222, 0.538, 2.928]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1462.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.521, 0.496, 2.178]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1465.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.234, 0.535, 2.178]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1468.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.404, 0.506, 3.286]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1471.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.404, 0.506, 3.101]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1474.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.404, 0.506, 2.93]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1477.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.266, 0.537, 2.356]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1480.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.388, 0.507, 3.608]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1483.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.388, 0.505, 3.777]}
        rotation={[Math.PI / 2, 1.528, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1486.geometry}
        material={materials['Material.108']}
        position={[1.388, 0.506, 3.958]}
        rotation={[Math.PI / 2, 1.528, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1489.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.222, 0.539, 3.872]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1492.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.189, 0.544, 4.047]}
        rotation={[Math.PI / 2, 1.408, -Math.PI / 2]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1495.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.786, 0.472, 2.512]}
        rotation={[0.077, 0.003, 0.039]}
        scale={[0.025, 0.025, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1498.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.75, 0.47, 2.507]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.047, 0.027, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1501.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.75, 0.47, 2.679]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.047, 0.027, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1504.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.801, 0.474, 2.691]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.03, 0.018, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1507.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.75, 0.47, 2.334]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.047, 0.027, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1510.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.801, 0.476, 2.356]}
        rotation={[-1.562, 1.492, 1.562]}
        scale={[0.03, 0.018, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1513.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.921, 0.455, 5.455]}
        rotation={[-Math.PI / 2, 1.502, Math.PI / 2]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.063']}
        position={[-0.61, -0.006, 1.561]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-3.689, 0.26, 7.316]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.063_0']}
        position={[-0.859, 1.997, -3.537]}
        scale={[1.735, 1.573, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.063_0']}
        position={[-0.859, 1.997, -3.537]}
        scale={[1.735, 1.573, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.063_0']}
        position={[0.828, 0.332, -3.536]}
        rotation={[-Math.PI, 0, 2.904]}
        scale={[-0.06, 0.121, 0.884]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.063_0']}
        position={[-2.534, 0.332, -3.536]}
        rotation={[-Math.PI, 0, -3.006]}
        scale={[-0.06, 0.122, 0.884]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.097']}
        position={[0.742, 0.512, -2.629]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.061, 0.023, 0.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['Material.017']}
        position={[0.793, 2.884, -3.556]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.507, 0.1, 0.507]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[0.896, 2.887, -3.554]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[0.69, 2.887, -3.554]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.063_1']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.017']}
        position={[0.793, 1.779, -3.556]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.507, 0.1, 0.507]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[0.896, 1.781, -3.554]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[0.69, 1.781, -3.554]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.017']}
        position={[-2.514, 2.923, -3.349]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.507, 0.1, 0.507]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-2.411, 2.926, -3.348]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-2.617, 2.926, -3.348]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials['Material.017']}
        position={[-1.715, 3.444, -3.554]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.515, 0.102, 0.515]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-1.713, 3.339, -3.553]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={1.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-1.713, 3.548, -3.553]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={1.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['Material.063_2']}
        position={[-0.961, 0.788, -3.634]}
        scale={[1.607, 0.343, 0.739]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials['Material.063_0']}
        position={[-1.081, 3.464, -3.55]}
        scale={[0.072, 0.108, 0.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials['Material.017']}
        position={[-0.445, 3.444, -3.554]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.515, 0.102, 0.515]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-0.443, 3.339, -3.553]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={1.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials['rgb-hdd-cover-aorus-v1']}
        position={[-0.443, 3.548, -3.553]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={1.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['Material.097']}
        position={[-2.775, 4.579, -4.079]}
        rotation={[0.056, 0, 0]}
        scale={0.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials['Material.097']}
        position={[-2.775, 4.579, -4.397]}
        rotation={[-0.049, 0, 0]}
        scale={0.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials['Material.063_3']}
        position={[-2.597, 2.848, -4.225]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[0.265, 0.318, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials['Material.063_0']}
        position={[0.938, 2.286, -3.553]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.12, 1.178, 0.593]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials['Material.063_0']}
        position={[-2.651, 2.917, -3.351]}
        scale={[0.064, 0.555, 0.555]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_0']}
        position={[-2.356, 2.877, -4.239]}
        rotation={[Math.PI / 2, 0.651, 0]}
        scale={0.063}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials['Material.023']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials['Material.024']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials['Material.063_4']}
        position={[-0.423, 3.57, -3.542]}
        rotation={[0, 0, Math.PI]}
        scale={[1, 1, 1.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials['Material.063_4']}
        position={[-1.742, 3.57, -3.542]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[1, 1, 1.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={materials['Material.063_4']}
        position={[-2.709, 2.915, -3.353]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.796, 0.796, 1.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_1']}
        position={[-0.964, 2.71, -4.309]}
        scale={[-0.015, 0.443, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials['Material.063_5']}
        position={[-0.957, 2.71, -4.324]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials['Material.097']}
        position={[-0.964, 2.71, -4.324]}
        scale={[-0.002, 0.467, 0.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials['Material.063_5']}
        position={[-0.97, 2.71, -4.517]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_1']}
        position={[-1.037, 2.71, -4.309]}
        scale={[-0.015, 0.443, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials['Material.063_5']}
        position={[-1.03, 2.71, -4.324]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials['Material.097']}
        position={[-1.037, 2.71, -4.324]}
        scale={[-0.002, 0.467, 0.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_88.geometry}
        material={materials['Material.063_5']}
        position={[-1.043, 2.71, -4.517]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_90.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_1']}
        position={[-1.106, 2.71, -4.309]}
        scale={[-0.015, 0.443, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_92.geometry}
        material={materials['Material.063_5']}
        position={[-1.099, 2.71, -4.324]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials['Material.097']}
        position={[-1.105, 2.71, -4.324]}
        scale={[-0.002, 0.467, 0.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials['Material.063_5']}
        position={[-1.111, 2.71, -4.517]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_1']}
        position={[-1.175, 2.71, -4.309]}
        scale={[-0.015, 0.443, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials['Material.063_5']}
        position={[-1.168, 2.71, -4.324]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials['Material.097']}
        position={[-1.175, 2.71, -4.324]}
        scale={[-0.002, 0.467, 0.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials['Material.063_5']}
        position={[-1.181, 2.71, -4.517]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.011, 0.444, 0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials['Material.063_4']}
        position={[-2.58, 1.82, -3.59]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.091, 0.796, 1.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials['Material.097']}
        position={[-2.195, 0.853, -0.711]}
        scale={[0.492, 0.597, 0.293]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials['Material.063_6']}
        position={[-2.121, 0.794, -2.982]}
        scale={[0.355, 0.206, 0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_2']}
        position={[-0.935, 0.832, -2.888]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_114.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_3']}
        position={[0.877, 0.836, -3.553]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.394}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_116.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_4']}
        position={[-1.692, 1.144, -0.716]}
        rotation={[0, 0, -1.554]}
        scale={[0.194, 0.025, 0.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_118.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_4']}
        position={[-1.664, 0.706, -0.716]}
        rotation={[0, 0, -1.536]}
        scale={[0.103, 0.013, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_120.geometry}
        material={materials['Material.097']}
        position={[-2.195, 0.853, 6.714]}
        scale={[0.492, 0.597, 0.293]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_4']}
        position={[-1.692, 1.144, 6.709]}
        rotation={[0, 0, -1.554]}
        scale={[0.194, 0.025, 0.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_4']}
        position={[-1.664, 0.706, 6.709]}
        rotation={[0, 0, -1.536]}
        scale={[0.103, 0.013, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_126.geometry}
        material={materials['Material.063_7']}
        position={[0.006, 0.704, -2.891]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.452}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_128.geometry}
        material={materials['Material.063_8']}
        position={[-2.603, 0.78, -3.528]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.595}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_130.geometry}
        material={materials['Material.063_9']}
        position={[0.705, 3.571, -2.897]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_132.geometry}
        material={materials['Material.063_9']}
        position={[0.705, 3.571, -3.21]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_134.geometry}
        material={materials['Material.063_9']}
        position={[0.705, 3.571, -3.526]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_136.geometry}
        material={materials['Material.013']}
        position={[0.699, 3.567, -4.07]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_138.geometry}
        material={materials['Material.032']}
        position={[0.699, 3.567, -4.237]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_140.geometry}
        material={materials['Material.063_9']}
        position={[0.705, 3.571, -3.849]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_142.geometry}
        material={materials['Material.033']}
        position={[-1.882, 2.685, -3.682]}
        scale={[0.093, 0.424, 0.424]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_144.geometry}
        material={materials['Material.033']}
        position={[-1.347, 2.685, -3.682]}
        scale={[0.093, 0.424, 0.424]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_146.geometry}
        material={materials['Material.063_10']}
        position={[-1.614, 2.682, -3.682]}
        scale={[0.174, 0.401, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_148.geometry}
        material={materials['Material.063_11']}
        position={[-1.614, 2.682, -3.682]}
        scale={[0.174, 0.401, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_150.geometry}
        material={materials['Material.063_11']}
        position={[-1.614, 2.682, -3.682]}
        scale={[0.174, 0.401, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_152.geometry}
        material={materials['Material.042']}
        position={[-1.614, 2.682, -3.682]}
        scale={[0.174, 0.401, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_154.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_5']}
        position={[-1.611, 2.687, -3.69]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.327, 0.342, 0.327]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_156.geometry}
        material={materials['Material.045']}
        position={[-1.739, 2.425, -4.217]}
        rotation={[-1.097, 0, Math.PI]}
        scale={[0.021, 0.17, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_158.geometry}
        material={materials['Material.063_4']}
        position={[-2.58, 2.207, -3.59]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.091, 0.796, 1.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_160.geometry}
        material={materials['Material.063_12']}
        position={[-1.438, 2.502, -3.257]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_162.geometry}
        material={materials['Material.097']}
        position={[0.835, 0.833, -3.556]}
        scale={[0.057, 0.289, 0.463]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_164.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_6']}
        position={[-1.159, 1.507, -4.352]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_166.geometry}
        material={materials['Material.048']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_168.geometry}
        material={materials['Material.049']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_170.geometry}
        material={materials['Material.054']}
        position={[-1.223, 1.851, -3.706]}
        scale={[1.332, 0.132, 0.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_172.geometry}
        material={materials['Material.061']}
        position={[-1.272, 2.001, -3.706]}
        scale={[1.281, 0.127, 0.524]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_174.geometry}
        material={materials['Material.063_13']}
        position={[-2.095, 1.846, -3.701]}
        scale={[0.364, 0.106, 0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_176.geometry}
        material={materials['Material.063_14']}
        position={[-1.244, 1.846, -3.701]}
        scale={[0.364, 0.106, 0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_178.geometry}
        material={materials['Material.063_13']}
        position={[-0.378, 1.846, -3.701]}
        scale={[0.364, 0.106, 0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_180.geometry}
        material={materials['Material.063_15']}
        position={[1.172, 0.256, -0.292]}
        scale={[1.244, 1.199, 1.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_182.geometry}
        material={materials['Material.056']}
        position={[-2.293, 2.048, -3.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.104, 0.109, 0.104]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_184.geometry}
        material={materials['Material.063_16']}
        position={[-1.272, 2.001, -3.706]}
        scale={[1.281, 0.127, 0.524]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_186.geometry}
        material={materials['Material.058']}
        position={[-1.272, 2.001, -3.706]}
        scale={[1.281, 0.127, 0.524]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_188.geometry}
        material={materials['Material.062']}
        position={[-1.237, 2.643, -3.168]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.333, 0.008, 0.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_190.geometry}
        material={materials['Material.063_17']}
        position={[-1.226, 2.137, -3.704]}
        scale={[1.333, 0.008, 0.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_192.geometry}
        material={materials['Material.063_18']}
        position={[-1.824, 1.817, -3.158]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.086, 0.091, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_194.geometry}
        material={materials['Material.097']}
        position={[-1.223, 1.851, -3.706]}
        scale={[1.332, 0.132, 0.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_196.geometry}
        material={materials['Material.097']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.894, 1.064, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_198.geometry}
        material={materials['Material.063_19']}
        position={[1.114, 0.324, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_200.geometry}
        material={materials['Material.075']}
        position={[1.114, 0.324, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_202.geometry}
        material={materials['Material.063_19']}
        position={[1.114, 0.325, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_204.geometry}
        material={materials['Material.063_19']}
        position={[1.114, 0.325, -0.274]}
        rotation={[0, 0, 3.131]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_206.geometry}
        material={materials['Material.076']}
        position={[1.115, 0.323, -0.273]}
        rotation={[0, 0, 3.131]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_208.geometry}
        material={materials['Material.097']}
        position={[1.114, 0.324, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_210.geometry}
        material={materials['Material.063_20']}
        position={[1.114, 0.324, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_212.geometry}
        material={materials['Material.063_19']}
        position={[0.659, 0.345, -0.273]}
        rotation={[0, 0, 2.907]}
        scale={[-0.429, 0.229, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_214.geometry}
        material={materials['Material.097']}
        position={[0.772, 0.345, -0.285]}
        rotation={[Math.PI / 2, 0, 0.001]}
        scale={[0.116, 0.025, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_216.geometry}
        material={materials['Material.077']}
        position={[0.772, 0.345, -0.279]}
        rotation={[Math.PI / 2, 0, 0.001]}
        scale={[0.119, 0.004, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_218.geometry}
        material={materials['Material.082']}
        position={[0.772, 0.345, -0.287]}
        rotation={[Math.PI / 2, 0, 0.001]}
        scale={[0.104, 0.029, 0.104]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_220.geometry}
        material={materials['Material.085']}
        position={[-0.577, 1.183, -3.156]}
        rotation={[Math.PI, 0, 1.234]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_222.geometry}
        material={materials['Material.097']}
        position={[-0.929, 2.067, -3.149]}
        scale={[0.056, 0.042, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_224.geometry}
        material={materials['Material.063_21']}
        position={[-2.58, 1.955, -3.715]}
        scale={[0.012, 0.177, 0.524]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_226.geometry}
        material={materials['Material.087']}
        position={[-0.314, 1.838, -4.402]}
        rotation={[Math.PI, 0, 1.234]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_228.geometry}
        material={materials['Material.097']}
        position={[-0.817, 2.665, -4.374]}
        scale={[0.028, 0.174, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_230.geometry}
        material={materials['Material.097']}
        position={[0.704, 3.344, -4.374]}
        scale={[0.028, 0.12, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_232.geometry}
        material={materials['Material.096']}
        position={[0.73, 2.382, -4.374]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_234.geometry}
        material={materials['Material.097']}
        position={[-2.698, 1.826, -3.384]}
        scale={[0.16, 0.043, 0.092]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_236.geometry}
        material={materials['Material.097']}
        position={[-1.585, 2, 3.752]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.16, 0.043, 0.092]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_238.geometry}
        material={materials['Material.097']}
        position={[-1.589, 1.277, 2.994]}
        rotation={[-2.249, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_240.geometry}
        material={materials['Material.090']}
        position={[0.932, 0.477, -0.277]}
        rotation={[0.027, 0, 0.233]}
        scale={[0.026, 0.022, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_242.geometry}
        material={materials['Material.092']}
        position={[1.291, 0.445, -0.276]}
        rotation={[0, 0, -0.284]}
        scale={[0.06, 0.021, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_244.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_7']}
        position={[1.295, 0.466, -0.275]}
        rotation={[Math.PI / 2, 1.287, -Math.PI / 2]}
        scale={0.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_246.geometry}
        material={materials['Material.097']}
        position={[1.114, 0.324, -0.274]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.429, 0.229, 0.448]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_248.geometry}
        material={materials['Material.094']}
        position={[0.83, 3.082, -2.822]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.099, 0.049, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_250.geometry}
        material={materials['Material.096']}
        position={[0.845, 2.804, -2.822]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.065, 0.032, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_252.geometry}
        material={materials['Material.096']}
        position={[0.845, 2.543, -2.822]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.067, 0.033, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_254.geometry}
        material={materials['Material.097']}
        position={[0.876, 2.025, -2.755]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.103, 0.097, 0.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_256.geometry}
        material={materials['Material.098']}
        position={[0.99, 0.384, -0.082]}
        rotation={[0, 0, 0.129]}
        scale={[0.055, 0.019, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_258.geometry}
        material={materials['Material.097']}
        position={[-0.334, 0.298, -0.268]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_260.geometry}
        material={materials['Material.097']}
        position={[-2.668, 2.603, -4.328]}
        scale={[0.077, 0.052, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_262.geometry}
        material={materials['Material.097']}
        position={[-2.668, 2.603, -4.268]}
        scale={[0.077, 0.052, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_264.geometry}
        material={materials['Material.097']}
        position={[-2.668, 2.74, -4.266]}
        scale={[0.077, 0.052, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_266.geometry}
        material={materials['Material.097']}
        position={[-2.636, 2.487, -4.218]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.031, 0.055, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_268.geometry}
        material={materials['Material.104']}
        position={[0.877, 3.082, -2.823]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_270.geometry}
        material={materials['Material.097']}
        position={[0.834, 0.26, 3.607]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_272.geometry}
        material={materials['Material.097']}
        position={[-2.757, 0.26, 5.697]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_274.geometry}
        material={materials['Material.097']}
        position={[-2.713, 0.26, 5.697]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_276.geometry}
        material={materials['Material.097']}
        position={[-2.804, 0.26, 0.285]}
        rotation={[Math.PI, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_278.geometry}
        material={materials['Material.055']}
        position={[-1.386, 2.957, 3.004]}
        rotation={[-1.571, 1.501, 1.571]}
        scale={[3.253, 1.841, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_280.geometry}
        material={materials['Material.044']}
        position={[-1.467, 2.637, 3.004]}
        rotation={[-1.571, 1.449, 1.571]}
        scale={[-3.253, 1.529, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_282.geometry}
        material={materials['Material.063_22']}
        position={[-1.42, 1.648, 5.961]}
        rotation={[1.587, 0.121, 1.31]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_284.geometry}
        material={materials['Material.097']}
        position={[-1.571, 4.477, 3.004]}
        rotation={[-Math.PI / 2, 1.501, Math.PI / 2]}
        scale={[3.253, 0.31, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_286.geometry}
        material={materials['Material.063_23']}
        position={[-1.537, 1.949, 0.83]}
        rotation={[1.576, 0.129, 1.57]}
        scale={1.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_288.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_8']}
        position={[-1.362, 3.001, 3.004]}
        rotation={[Math.PI / 2, 0.07, -Math.PI / 2]}
        scale={[3.316, 3.316, 3.481]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_290.geometry}
        material={materials['Material.063_24']}
        position={[-1.615, 4.494, 0.821]}
        rotation={[Math.PI / 2, 0.07, Math.PI / 2]}
        scale={0.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_292.geometry}
        material={materials['Material.063_24']}
        position={[-1.221, 1.228, 3.016]}
        rotation={[Math.PI / 2, 0.07, -Math.PI / 2]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_294.geometry}
        material={materials['Material.003']}
        position={[-1.487, 1.81, 2.992]}
        rotation={[-1.571, 1.501, 1.571]}
        scale={[1.676, 1.935, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_296.geometry}
        material={materials['Material.004']}
        position={[-1.865, 2.916, 2.974]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.163, 0.129, 0.288]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_298.geometry}
        material={materials['Material.043']}
        position={[-2.03, -0.648, 3.004]}
        rotation={[-1.571, 1.501, 1.571]}
        scale={[0.406, 5.316, 0.166]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_300.geometry}
        material={materials['Material.037']}
        position={[-2.13, 0.353, 2.961]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-1.938, 0.093, 0.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_302.geometry}
        material={materials['Material.039']}
        position={[-0.802, 0.316, 4.531]}
        rotation={[0, 1.249, 0]}
        scale={[0.491, 0.056, 1.088]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_304.geometry}
        material={materials['Material.039']}
        position={[-0.802, 0.316, 1.638]}
        rotation={[-Math.PI, 1.281, -Math.PI]}
        scale={[0.491, 0.056, 1.088]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_306.geometry}
        material={materials['Material.006']}
        position={[-1.811, 0.316, 2.958]}
        rotation={[-Math.PI, 0.006, -Math.PI]}
        scale={[0.434, 0.05, 0.962]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_308.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_310.geometry}
        material={materials.Tastatur_Unterseite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_312.geometry}
        material={materials.Tastatur_Unterseite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_314.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_316.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_318.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_320.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_322.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_324.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_326.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_328.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_330.geometry}
        material={materials['Material.007']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_332.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_334.geometry}
        material={materials['Material.005']}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_336.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_338.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_340.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_342.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_344.geometry}
        material={materials.Tastatur_Seite}
        position={[1.477, 0.332, 4.031]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_346.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_348.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_350.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_352.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_354.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_356.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_358.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_360.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_362.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_364.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_366.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_368.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_370.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_372.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_374.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_376.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_378.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_380.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_382.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_384.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_386.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_388.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_390.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_392.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_394.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_396.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_398.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_400.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_402.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_404.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_406.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_408.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_410.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_412.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_414.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_416.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_418.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_420.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_422.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_424.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_426.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.008]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[1.541, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_428.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 3.858]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_430.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_432.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_434.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_436.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_438.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_440.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_442.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_444.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_446.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_448.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_450.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_452.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_454.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_456.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_458.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_460.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_462.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_464.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_466.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_468.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_470.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_472.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_474.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_476.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_478.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_480.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_482.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_484.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_486.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_488.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_490.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_492.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_494.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_496.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_498.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_500.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_502.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_504.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_506.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_508.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_510.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_512.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_514.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_516.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_518.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_520.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.008]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[1.541, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_522.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_524.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_526.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.324, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_528.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_530.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_532.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_534.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_536.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_538.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_540.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_542.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_544.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 2.899]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[1.429, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_546.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_548.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_550.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_552.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_554.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.291, 0.326, 3.951]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[0.793, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_556.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.291, 0.326, 3.951]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[0.793, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_558.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 3.857]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_560.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 3.857]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_562.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 3.855]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_564.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.26, 0.348, 4.027]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_566.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_568.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_570.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_572.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_574.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_576.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_578.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_580.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_582.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_584.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_586.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_588.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_590.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_592.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_594.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_596.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_598.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_600.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_602.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_604.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_606.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_608.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_610.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_612.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_614.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_616.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_618.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_620.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_622.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_624.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_626.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_628.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_630.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_632.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_634.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_636.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_638.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_640.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_642.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_644.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_646.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_648.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_650.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_652.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_654.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_656.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_658.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_660.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_662.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_664.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_666.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_668.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_670.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_672.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_674.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_676.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_678.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_680.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_682.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_684.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_16']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_686.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_9']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_688.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_690.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_692.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_15']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_694.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_696.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_698.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_700.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 2.899]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[1.429, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_702.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_704.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_12']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_706.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_708.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_14']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_710.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_10']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_712.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_13']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_714.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_716.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_718.geometry}
        material={materials['Material.097']}
        position={[1.649, 0.311, 3.87]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[0.676, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_720.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_722.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_724.geometry}
        material={materials['Material.097']}
        position={[1.302, 0.346, 3.906]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[0.728, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_726.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_728.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_730.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_732.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_734.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_736.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.029]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_738.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_740.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_742.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_744.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_746.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_748.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_750.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_752.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_754.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_756.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_758.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_760.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_762.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_764.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_766.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_768.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_770.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_772.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_774.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_776.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_778.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_780.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_782.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_784.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_786.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_788.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_790.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_792.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_794.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_796.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_798.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_800.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_802.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_804.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_806.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_808.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_810.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_812.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_814.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_816.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_818.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_820.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_822.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_824.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_826.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 3.859]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_828.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_830.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_832.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_834.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_836.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_838.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_840.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_842.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_844.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_846.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_848.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_850.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_852.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_854.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_856.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_858.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_860.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_862.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_864.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_866.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_868.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_870.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_872.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_874.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_876.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_878.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_880.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_882.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_884.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_886.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_888.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_890.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_892.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_894.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_896.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_898.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_900.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_902.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_904.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.343, 2.593]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={[1.579, 0.914, 0.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_906.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_908.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_910.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_912.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_914.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_916.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_918.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_920.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_922.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_924.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_926.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_928.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_930.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_932.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_934.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_936.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_938.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_940.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_942.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_944.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_946.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_948.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_950.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_952.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_954.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_956.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_958.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_960.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_962.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_964.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_966.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_968.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_970.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_972.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_974.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_976.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_978.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_980.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_982.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_984.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_986.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_988.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_990.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_992.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_994.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_996.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_998.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1000.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1002.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1004.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1006.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1008.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1010.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1012.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1014.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1016.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1018.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1020.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1022.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1024.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1026.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1028.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1030.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1032.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1034.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1036.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1038.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1040.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1042.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1044.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1046.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1048.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1050.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1052.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1054.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1056.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1058.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1060.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1062.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1064.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1066.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1068.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1070.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1072.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1074.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1076.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1078.geometry}
        material={materials['Material.097']}
        position={[1.477, 0.346, 4.031]}
        rotation={[-Math.PI / 2, 0.09, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1083.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.742, 0.469, 3.077]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1085.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.914, 0.452, 3.25]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1090.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.914, 0.452, 2.901]}
        scale={0.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1092.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_11']}
        position={[1.909, 0.452, 3.077]}
        rotation={[0, -1.538, 0]}
        scale={0.526}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1094.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.394, 0.505, 5.913]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1096.geometry}
        material={materials['rgb-hdd-cover-aorus-v1_17']}
        position={[1.411, 0.505, 5.863]}
        scale={0.293}
      />
    </group>
  )
}

useGLTF.preload('/gaming_desktop_pc_blend_file.glb')
