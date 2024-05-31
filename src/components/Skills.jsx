import { CharacterAnimation } from ".";
import { SectionWrapper } from "../hoc";
import TimeLine from "./TimeLine";

const Skills = () => {
  return (
    <>
      <div>
        <CharacterAnimation text="What technologies have I worked with ?" textStyle="sectionSubText" />
        <CharacterAnimation text="My Skills." textStyle="sectionHeadText" />
      </div>
      <TimeLine />
    </>
  );
};

export default SectionWrapper(Skills, "skills");
