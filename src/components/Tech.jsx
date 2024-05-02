import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { zoomInHidden, zoomInVisible } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={index}>
          <motion.div
            className="p-3 rounded-full bg-white overflow-hidden w-full h-full flex items-center justify-center"
            initial={zoomInHidden}
            whileInView={zoomInVisible(index * 0.05, 0.3)}
          >
            <img src={technology.icon} alt={technology.name} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
