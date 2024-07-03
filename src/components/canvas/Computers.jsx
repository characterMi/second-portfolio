import {
  Html,
  PresentationControls,
  Text3D,
  useGLTF
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import jsonFont from "../../assets/font.json";

import CanvasLoader from "../Loader";

const Lights = () => (
  <>
    <ambientLight intensity={3} />
    <pointLight args={[0xaaa6c3, 4]} position={[0.4, 0, -0.8]} />
  </>
)

const Computer = ({ isMobile, ...props }) => {
  const { nodes, materials } = useGLTF("/second-portfolio/mac_book/model.glb");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Controls */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        {/* Object */}
        <group {...props} dispose={null}>
          <mesh
            geometry={nodes.Macbook.geometry}
            material={materials.PaletteMaterial001}
            position={isMobile ? [0.3, -0.5, -0.36] : [0, -0.5, -0.285]}
            scale={isMobile ? 0.7 : 0.95}
          >
            <Html
              transform
              distanceFactor={0.74}
              position={isMobile ? [-0.003, 0.07, -0.7] : [-0.006, 0.05, -0.71]}
              rotation-x={-0.256}
            >
              <iframe
                className="w-[1024px] h-[690px] border-none rounded-[20px] bg-black"
                style={{ display: isLoading ? "none" : "block" }}
                src="https://charactermi.github.io/portfolio"
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && <p className="text-4xl rotate-2">Loading the website...</p>}
            </Html>
          </mesh>
          <mesh
            geometry={nodes.Top.geometry}
            material={materials.PaletteMaterial001}
            position={isMobile ? [0.301, -0.45, -0.85] : [0.001, -0.45, -0.945]}
            rotation={[1.311, 0, 0]}
            scale={isMobile ? 0.7 : 0.95}
          />
        </group>
        {/* Text (#opentowork) */}
        <Text3D
          font={jsonFont}
          scale={isMobile ? 0.15 : 0.25}
          position={isMobile ? [1, -0.5, -0.7] : [1.1, -0.6, -0.9]}
          rotation-y={-1.5}
          textAlign="center"
          color="#aaa6c3"
          receiveShadow
          castShadow
        >
          #opentowork
          <meshBasicMaterial color="#aaa6c3" />
        </Text3D>
      </PresentationControls>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 650px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [-2, 0.9, 3], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="touch-none"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Lights />
        <Computer isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/second-portfolio/mac_book/model.glb")

export default ComputersCanvas;
