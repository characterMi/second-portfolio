import { motion } from "framer-motion";

const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2
  } 100 0`;

const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2
  } 100 0`;

const pathAnimation = {
  initial: {
    d: initialPath,
  },
  enter: {
    d: targetPath,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    d: initialPath,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Curve = () => (
  <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-tertiary stroke-none">
    <motion.path
      variants={pathAnimation}
      initial="initial"
      animate="enter"
      exit="exit"
    />
  </svg>
);

export default Curve;
