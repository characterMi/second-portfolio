import { Html, useProgress } from "@react-three/drei"
import { Dna } from "react-loader-spinner"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <div className="flex flex-col items-center absolute left-[-55px]" style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40 }}>
          <Dna height="120px" width="120px" />
          {progress.toFixed(2)}%
        </div>
      </span>
    </Html>
  )
}

export default Loader