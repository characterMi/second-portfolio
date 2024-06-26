import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../style";
import { navBarSlideIn } from "../utils/motion";
import Magnetic from "./Magnetic";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > window.innerHeight) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <motion.nav
      className={`${styles.paddingX} w-full flex items-center py-5 bg-primary/90 backdrop-blur-sm fixed top-0 left-0 z-[100000000] transition`}
      initial="initial"
      animate="enter"
      variants={navBarSlideIn}
      style={{
        translateY: isHidden ? "-100%" : 0,
      }}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            <span className="text-[#ED1703] text-[22px]">A</span>bolfazl
          </p>
        </div>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <Magnetic key={link.id}>
              <li
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer duration-200"
              >
                <a href={link.id}>{link.title}</a>
              </li>
            </Magnetic>
          ))}
        </ul>

        <MobileSidebar />

      </div>
    </motion.nav>
  );
};

export default Navbar;
