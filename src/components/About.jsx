import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { CharacterAnimation, WordAnimation } from ".";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeInHidden, fadeInVisible } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      initial={fadeInHidden("right")}
      whileInView={fadeInVisible("spring", index * 0.1, 0.75)}
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
      <div>
        <CharacterAnimation text="Introduction" textStyle="sectionSubText" />
        <CharacterAnimation text="Overview." textStyle="sectionHeadText" />
      </div>
      <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <WordAnimation text="I&apos;m a skilled web developer with experience in TypeScript and JavaScript, and expertise in frameworks and libraries like React, Next.js, TailwindCSS and Three.js. Let&apos;s work together to bring your ideas to life !" />
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
