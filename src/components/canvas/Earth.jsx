import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF('/second-portfolio/earth/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true}
          enableZoom={false}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas