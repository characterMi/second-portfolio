import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { frame_works } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ frame_work }) => {
  return (
    <VerticalTimelineElement
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={frame_work.icon}
            alt={frame_work.languages_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={frame_work.date}
      iconStyle={{ background: frame_work.iconBg }}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{frame_work.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {frame_work.languages_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What technologies have I worked with ?
        </p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {frame_works.map((frame_work, index) => (
            <ExperienceCard key={index} frame_work={frame_work} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
