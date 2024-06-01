import { useEffect, useRef } from "react";
import { heart } from "../assets";

const Footer = () => {
  const letters = useRef([]);

  const handleMouseOver = (e) => {
    e.target.classList.add("font-black")
    e.target.nextElementSibling?.classList.add("font-bold")
    e.target.nextElementSibling?.nextElementSibling?.classList.add("font-medium")
    e.target.previousElementSibling?.classList.add("font-bold")
    e.target.previousElementSibling?.previousElementSibling?.classList.add("font-medium")
  }
  const handleMouseLeave = (e) => {
    e.target.classList.remove("font-black")
    e.target.nextElementSibling?.classList.remove("font-bold")
    e.target.nextElementSibling?.nextElementSibling?.classList.remove("font-medium")
    e.target.previousElementSibling?.classList.remove("font-bold")
    e.target.previousElementSibling?.previousElementSibling?.classList.remove("font-medium")
  }

  useEffect(() => {
    letters.current.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver)
      item.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      letters.current.forEach(item => {
        item.removeEventListener("mouseover", handleMouseOver)
        item.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])


  return (
    <div className="h-[60px] bg-primary/10 border-t border-primary/30 flex justify-center items-center">
      <h3 className="text-secondary flex items-center xs:text-[18px] text-[14px]">
        Made with{" "}
        <img
          src={heart}
          alt="Love"
          className="w-[30px] h-[30px] object-contain"
        />{" "}
        by
        <h2 className="ml-1 flex gap-x-[1px]">
          {"Abolfazl Taghadosi".split("").map((letter, index) => (
            <span
              ref={ref => letters.current[index] = ref}
              className="orange-text-gradient"
              key={index}
            >
              {letter}
            </span>
          ))}
        </h2>
      </h3>
    </div>
  );
};

export default Footer;
