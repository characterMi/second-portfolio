import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { rotateIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div
          className="w-28 h-28"
          key={index}
          style={{
            perspective: "120px",
            WebkitPerspective: "120px",
            MozPerspective: "120px",
            perspectiveOrigin: "top",
            WebkitPerspectiveOrigin: "top",
            MozPerspectiveOrigin: "top",
          }}
        >
          <motion.div
            className="p-3 rounded-full bg-white overflow-hidden w-full h-full flex items-center justify-center"
            variants={rotateIn}
            initial="initial"
            whileInView="enter"
            exit="exit"
            custom={index}
          >
            <img src={technology.icon} alt={technology.name} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
