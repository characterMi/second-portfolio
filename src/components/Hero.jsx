import { motion } from "framer-motion";
import { styles } from "../style";
import { expandAnimation, heroHeadTextAnimation, heroSubTextAnimation, increaseHeight, zoomIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const heroSubText = "I develop 3D visuals, user interfaces and web applications"

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div className="w-5 h-5 rounded-full bg-[#915eff]" variants={zoomIn} initial='initial' animate="start" />
          <motion.div variants={increaseHeight} custom={1} initial='initial' animate="start" className="w-1 sm:h-80 h-40 violet-gradient origin-top" />
        </div>
        <div>
          <motion.h1 className={`${styles.heroHeadText} text-white`} variants={heroHeadTextAnimation} initial="initial" animate="start">
            Hi, I&apos;m <span className="text-[#915eff]">Abolfazl</span>
          </motion.h1>

          <div className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg flex gap-1 sm:gap-2 flex-wrap`}>
            {heroSubText.split(" ").map((word, index) => (
              <motion.p key={word} className="lg:h-[40px] sm:h-[36px] xs:h-[30px] h-[26px] overflow-hidden" variants={heroSubTextAnimation} initial="initial" animate="start" custom={index}>
                <span>
                  {word}
                </span>
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "inherit" }}
        transition={{
          delay: 3,
        }}
        className="w-full h-full"
      >
        <ComputersCanvas />
      </motion.section>

      <a className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center gap-x-2 focus:-translate-y-2" href="#about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.5,
            duration: 1,
          }}
          className="w-[25px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1"
        >
          <motion.div
            animate={{ y: [0, 28, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 rounded-full bg-secondary mb-10"
          />
        </motion.div>

        <motion.p className="text-secondary text-lg font-black origin-left" variants={expandAnimation} initial="initial" animate="enter" exit="exit" custom={4}>Click to scroll</motion.p>
      </a>
    </section>
  );
};

export default Hero;
