import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { frame_works } from "../constants";
import { fadeInHidden, fadeInVisible, increaseHeight, zoomIn } from "../utils/motion";

const TimeLine = () => {
    return (
        <section className="relative">
            <motion.div className="h-full w-1 bg-white absolute top-0 left-[23px] sm:left-[25px] md:left-[27px] min-[1170px]:left-1/2 min-[1170px]:-translate-x-1/2 origin-top" variants={increaseHeight} initial="initial" whileInView="start" exit="exit" />

            <div className="w-full h-full flex flex-col gap-y-8 py-8 overflow-hidden">
                {frame_works.map((technology, index) => (
                    <Skill key={technology.title} {...technology} index={index} />
                ))}
            </div>
        </section>
    )
}

const Skill = ({ title, languages_name, icon, iconBg, date, index }) => {
    const [viewport, setViewport] = useState(window.innerWidth);

    const handleResize = e => setViewport(e.target.innerWidth);

    const returnStyle = (mode) => {
        switch (mode) {
            case "direction":
                return {
                    direction: viewport < 1170 ? "ltr" : index % 2 === 0 ? "ltr" : "rtl"
                }
            case "border":
                if (viewport < 1170) {
                    return {
                        borderLeft: "2px solid #aaa6c3"
                    }
                }
                else {
                    return index % 2 === 0 ? {
                        borderRight: "2px solid #aaa6c3"
                    } : {
                        borderLeft: "2px solid #aaa6c3"
                    }
                }
            case "arrow":
                if (viewport < 1170) {
                    return {
                        borderLeft: "none",
                        right: "100%"
                    }
                }
                else {
                    return index % 2 === 0 ? {
                        borderRight: "none",
                        left: "100%"
                    } : {
                        borderLeft: "none",
                        right: "100%"
                    }
                }
            case "date":
                if (viewport < 1170) {
                    return {
                        display: "none",
                    }
                }
                else {
                    return index % 2 === 0 ? {
                        left: "125%"
                    } : {
                        right: "125%"
                    }
                }
            default:
                return;
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            style={returnStyle("direction")}
            className="w-full flex flex-row-reverse justify-between items-center min-[1170px]:px-10 min-[1170px]:flex-row gap-8"
        >
            <motion.div
                className="w-full min-[1170px]:w-[430px] bg-tertiary p-4 sm:p-8 rounded-md border-b-4 relative"
                style={returnStyle("border")}
                initial={fadeInHidden(viewport < 1170 ? "left" : index % 2 ? "left" : "right")}
                whileInView={fadeInVisible("spring", 0.5 + index * 0.05, 0.75)}
            >
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <h5 className="text-secondary">{languages_name}</h5>
                <h6 className="text-secondary text-sm mt-4 font-bold block min-[1170px]:hidden">{date}</h6>
                <div className="border-8 border-secondary border-y-primary absolute top-1/3" style={returnStyle("arrow")} />
            </motion.div>

            <motion.div className="aspect-square w-16 rounded-full border-4 z-10 -mt-8 flex justify-center items-center relative whitespace-nowrap" style={{ backgroundColor: iconBg }} variants={zoomIn} custom={0.5} initial="initial" whileInView="start" exit="exit">
                <img src={icon} alt={title} className="w-2/3 h-2/3 object-contain" />
                <div className="absolute" style={returnStyle("date")}>
                    {date}
                </div>
            </motion.div>

            {/* Useless... only for centering the middle div */}
            <div className="w-full xs:w-[430px] opacity-0 hidden min-[1170px]:block">{title}</div>
        </div>
    )
}

export default TimeLine;