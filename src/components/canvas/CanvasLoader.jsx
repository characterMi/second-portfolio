import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div>
        <div className="flex text-[14px] text-[#f1f1f1] font-bold mt-[40px] flex-col items-center absolute left-[-2.5rem]">
          <span className="loader mb-5" />
          {progress.toFixed(2)}%
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
