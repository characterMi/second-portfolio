import {
  Html,
  Preload,
  PresentationControls,
  Text,
  useGLTF
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Font from "/Caveat-Bold.ttf";

import CanvasLoader from "../Loader";

const Lights = () => (
  <>
    <ambientLight intensity={3} />
    <spotLight intensity={1} position={[1.8, 0.5, -1.5]} />
  </>
)

const Computer = ({ isMobile }) => {
  const laptop = useGLTF("/second-portfolio/mac_book/model.gltf");

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
        <primitive
          scale={isMobile ? 0.4 : 0.6}
          object={laptop.scene}
          position={isMobile ? [0.1, -0.9, 0] : [0.2, -1.4, 0]}
        >
          <Html
            transform
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
              <iframe
                className="w-[1024px] h-[690px] border-none rounded-[20px] bg-black"
                src="https://charactermi.github.io/portfolio"
              />
            </Suspense>
          </Html>
        </primitive>
        {/* Text (Abolfazl) */}
        <Text
          font={Font}
          fontSize={isMobile ? 0.2 : 0.4}
          position={isMobile ? [0.8, -0.3, -0.1] : [1.1, -0.4, 0.3]}
          rotation-y={-1.5}
          children={"ABOLFAZL\nTAGHADOSI"}
          textAlign="center"
        />
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
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
