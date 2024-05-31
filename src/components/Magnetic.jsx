import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;

    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  return (
    <motion.div
      className="relative"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
