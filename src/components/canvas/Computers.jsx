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
    <spotLight intensity={1} position={[1.8, 0.5, -1.5]} />
  </>
)

const Computer = ({ isMobile }) => {
  const { scene } = useGLTF("/second-portfolio/mac_book/model.gltf");
  const [isLoading, setIsLoading] = useState(true)

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
          object={scene}
          position={isMobile ? [0.1, -0.9, 0] : [0.2, -1.4, 0]}
        >
          <Html
            transform
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
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
        </primitive>
        {/* Text (Abolfazl) */}
        <Text3D
          font={jsonFont}
          scale={isMobile ? 0.15 : 0.3}
          position={isMobile ? [0.8, -0.3, -0.5] : [1.1, -0.35, -0.6]}
          rotation-y={-1.5}
          textAlign="center"
          receiveShadow
          castShadow
        >
          {"ABOLFAZL\nTAGHADOSI"}
          <meshBasicMaterial color="#d8d8d8" />
        </Text3D>

        <Text3D
          font={jsonFont}
          scale={isMobile ? 0.08 : 0.1}
          position={isMobile ? [0.8, 0, -0.3] : [1.1, 0.1, -0.1]}
          rotation-y={-1.5}
          textAlign="center"
          color="#56ccf2"
          receiveShadow
          castShadow
        >
          #opentowork
          <meshBasicMaterial color="#56ccf2" />
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

useGLTF.preload("/second-portfolio/mac_book/model.gltf")

export default ComputersCanvas;
