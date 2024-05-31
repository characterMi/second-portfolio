import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { Stars } from "./Stars";

const Earth = () => {
  const earth = useGLTF("/second-portfolio/planet/scene.glb");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 50, position: [-2, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Earth />
        <Stars />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/second-portfolio/planet/scene.glb")

export default EarthCanvas;
