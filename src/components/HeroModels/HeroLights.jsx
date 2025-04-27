import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
    <spotLight 
        position={[5,5,-1]}
        intensity={100}
        angle ={0.2}
        penumbra={0.2}
        color="white"
    />
        <spotLight 
        position={[4,5,5]}
        intensity={60}
        angle ={0.5}
        penumbra={0.7}
        color="##07508c"
    />
    <spotLight 
        position={[-3,5,5]}
        intensity={60}
        angle ={0.4}
        penumbra={1}
        color="#9d4edd"
    />
    <primitive
        object={new THREE.RectAreaLight("#45078c", 8, 3, 2)}
        position={[0, 1, 0]}
        intensity={0.5}
        rotaion={[-Math.PI / 4, Math.PI/4, 0]}
    />
    <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
    />
    <pointLight
        position={[1, 2, -2]}
        intensity={100}
        color="#6d078c"
    />

    </>
  )
}

export default HeroLights
