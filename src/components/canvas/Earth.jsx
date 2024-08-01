import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, memo } from "react";
import CanvasLoader from "./CanvasLoader";
import { Stars } from "./Stars";


const Earth = (props) => {
  const { nodes, materials } = useGLTF("/second-portfolio/planet/scene.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" rotation={[0.031, 0, 0.064]}>
          <group name="Clouds_1">
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Clouds}
            />
          </group>
          <group name="Planet_2">
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

const EarthRenderer = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 2.3] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          enablePan={false}
        />
        <Earth />
        <Stars />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/second-portfolio/planet/scene.glb")

const EarthCanvas = memo(EarthRenderer)

export default EarthCanvas;
