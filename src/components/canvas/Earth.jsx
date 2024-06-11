import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { Stars } from "./Stars";


const Earth = () => {
  const earth = useGLTF("/second-portfolio/planet/scene.glb");

  return (
    <primitive object={earth.scene} scale={2.5} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5.5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          enableDamping={false}
        />
        <Earth />
        <Stars />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/second-portfolio/planet/scene.glb")

export default EarthCanvas;
