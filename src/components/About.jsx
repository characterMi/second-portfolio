import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { web } from "../assets"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled web developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React and
        Three.js. Let's work together to bring your ideas to life ! More About Me 👇
      </motion.p>
      <div className="mt-20">
        <Tilt className="w-full" options={{
          max: 25,
          scale: 1,
          speed: 250
        }}>
          <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" variants={fadeIn("right", "spring", 0.5, 0.75)}>
            <div className="bg-tertiary rounded-[20px] py-5 px-4 md:px-12 min-h-[350px] flex justify-evenly items-center flex-col">
              <img src={web} alt="Web Developer" className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[28px] font-bold text-center">Web Developer</h3>
              <p className="text-secondary text-[18px] font-normal text-center">Hi there 👋. My name is "Abolfazl Taghadosi". I'm a front-end developer with some Skills in Html, Css, Sass, JavaScript and TypeScript. I'm currently learning NextJs.</p>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")