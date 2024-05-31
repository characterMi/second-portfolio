import { motion } from "framer-motion";
import { navLinks, socials } from "../constants/index";
import { menuSlide, slide } from "../utils/motion";
import Curve from "./Curve";

const Sidebar = ({ setToggle }) => (
  <motion.aside
    variants={menuSlide}
    initial="initial"
    animate="enter"
    exit="exit"
    className="fixed right-0 top-0 z-[100000000] h-screen black-gradient text-white w-full sm:w-[400px]"
  >
    <div className="flex flex-col text-xl mt-20 w-full p-8 h-[calc(100%-80px)] justify-between">
      <div className="flex flex-col gap-y-14">
        <p className="border-b pb-4 w-full">Abolfazl Taghadosi</p>

        <div className="flex flex-col gap-y-3 text-4xl font-thin">
          {navLinks.map((item, index) => (
            <motion.a
              variants={slide}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              key={item.id}
              href={item.id}
              onClick={() => setToggle(false)}
              className="hover:text-white text-secondary font-poppins font-medium"
            >
              {item.title}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        {socials.slice(0, 2).map((socialMedia, index) => (
          <motion.a
            key={socialMedia.link}
            href={socialMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={slide}
            custom={index + 3}
          >
            {socialMedia.title}
          </motion.a>
        ))}
      </div>
    </div>

    <Curve />
  </motion.aside>
);

export default Sidebar;
