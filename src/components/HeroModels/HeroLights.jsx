import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
    <spotLight 
        position={[5,5,-1]}
        intensity={40}
        angle ={0.2}
        penumbra={0.2}
        color="white"
    />
        <spotLight 
        position={[4,5,5]}
        intensity={100}
        angle ={0.5}
        penumbra={0.7}
        color="#07508c"
    />
    <spotLight 
        position={[-3,8,1]}
        intensity={100}
        angle ={0.4}
        penumbra={0.3}
        color="#234963"
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
        color="#5898bf"
    />
    <pointLight
        position={[1, 2, -2]}
        intensity={1}
        color="#f589b8"
    />

    </>
  )
}

export default HeroLights
