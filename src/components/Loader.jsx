import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="flex text-[14px] text-[#f1f1f1] font-bold mt-[40px] flex-col items-center absolute left-[-2.5rem]">
        <span className="loader mb-5"></span>
        {progress.toFixed(2)}%
      </div>
    </Html>
  );
};

export default Loader;
