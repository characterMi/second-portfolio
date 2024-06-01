import { CharacterAnimation, Tilt, WordAnimation } from ".";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

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
          <Tilt key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
