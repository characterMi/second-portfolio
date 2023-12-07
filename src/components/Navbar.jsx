import { useState } from "react";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            <span className="text-[#ED1703] text-[22px]">A</span>bolfazl
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer duration-200"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? " translate-y-[-100%]" : " translate-y-[75%]"
            } p-6 duration-300 black-gradient absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-white text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={() => setToggle(!toggle)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
