import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#151030", "#0b052c", "#0b3526", "#001e46", "#382038", "#360c16", "#3f0513"];

const Aurora = () => {
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #050816 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])


    return (
        <motion.section
            className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
            style={{
                backgroundImage,
            }}
        />
    )
}
export default Aurora