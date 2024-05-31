import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef } from "react";

export const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(1000), { radius: 1.2 });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
  });

  return (
    <group rotation={[0, 0, -1.1]} scale={3}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
