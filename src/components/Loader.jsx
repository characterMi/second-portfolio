import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">{progress.toFixed(2)}%</span>
    </Html>
  );
};

export default Loader;
