
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ProjectComp = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/sci_fi_monitor.glb');
  const txt = useTexture(props.texture ? props.texture : '/src/assets/anoymous.jpg');

  useEffect(() => {
    if (txt && materials['Material.002']) {
      txt.flipY = false;
      materials['Material.002'].map = txt;
      materials['Material.002'].needsUpdate = true;
    }
  }, [txt, materials]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      z: group.current.rotation.y + Math.PI,
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }, [txt]);

  return (
    <group {...props} ref={group} position={[0.5,-4.3,-0.5]} scale={2} rotation={[-1.55,-3.14,-2.80]}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.005']}
          >
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['Material.002']}>
          <meshBasicMaterial map={txt} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/sci_fi_monitor.glb')
export default ProjectComp;