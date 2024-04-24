import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeInHidden, fadeInVisible, textVariantHidden, textVariantVisible } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="sm:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      initial={fadeInHidden("right")}
      whileInView={fadeInVisible("spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div initial={textVariantHidden} whileInView={textVariantVisible()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" initial={textVariantHidden}
        whileInView={textVariantVisible(0.3)}
      >
        I&apos;m a skilled web developer with experience in TypeScript and
        JavaScript, and expertise in frameworks and libraries like React, Next.js, TailwindCSS and
        Three.js. Let&apos;s work together to bring your ideas to life !
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
