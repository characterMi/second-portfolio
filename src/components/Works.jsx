import { motion } from "framer-motion";
import { useState } from "react";

import { CharacterAnimation, WordAnimation } from ".";
import { arrow, github, website } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeInHidden, fadeInVisible } from "../utils/motion";

const ProjectCard = ({
  index,
  active,
  setActive,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site,
}) => {

  return (
    <motion.div
      initial={fadeInHidden("up")}
      whileInView={fadeInVisible("spring", index * 0.05, 0.75)}
      className='md:h-[420px]'
      style={{ zIndex: 10 - index }}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 gap-2 flex m-1 card-img_hover justify-end">
            <div
              onClick={() => window.open(live_site, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative after:bg-white after:w-[40%] after:h-[40%] after:absolute after:rounded-full"
            >
              <img
                src={website}
                alt="Live"
                className="w-1/2 h-1/2 object-contain z-[1]"
                loading="eager"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative after:bg-white after:w-1/2 after:h-1/2 after:absolute after:rounded-full"
            >
              <img
                src={github}
                alt="Github"
                className="w-2/3 h-2/3 object-contain z-[1]"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 relative duration-200 dropdown">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className={`mt-2 text-secondary text-[14px] transition-all text-justify leading-5 duration-300 ${active === name ? "line-clamp-none" : "line-clamp-2"}`}>
            {description}
          </p>
          <div
            className={`w-full h-[60%] bottom-0 tertiary-dropdown_gradient absolute transition-all ${active === name ? "opacity-0" : "opacity-100"
              }`}
          />
          <img
            src={arrow}
            className={`w-[30px] h-[30px] absolute left-[50%] transition-all duration-300 ${active === name ? "bottom-[-1.5rem]" : "bottom-[-1rem]"
              } cursor-pointer translate-x-[-50%] ${active === name ? "rotate-0" : "rotate-180"
              } `}
            alt="drop_down"
            onClick={() => setActive((prev) => prev === name ? "none" : name)}
            loading="eager"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p className={`text-[14px] ${tag.color}`} key={index}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState("none");

  return (
    <>
      <div>
        <CharacterAnimation text="My Works" textStyle="sectionSubText" />
        <CharacterAnimation text="Projects." textStyle="sectionHeadText" />
      </div>
      <div className="w-full flex">
        <div className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <WordAnimation text="Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It  reflects my ability to solve complex problems, work with different technologies, and manage projects  effectively." />
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} active={active} setActive={setActive} {...project} index={index} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "projects");
