import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { expandAnimation } from "../utils/motion";

const Tilt = ({ title, icon, index }) => {
    const rotation = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothRotation = {
        x: useSpring(rotation.x),
        y: useSpring(rotation.y),
    }

    const rotateX = useTransform(smoothRotation.y, [-0.5, 0.5], ["17.5deg", "-17.5deg"]),
        rotateY = useTransform(smoothRotation.x, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.target.getBoundingClientRect();

        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const xPercentage = mouseX / width - 0.5;
        const yPercentage = mouseY / height - 0.5;

        rotation.x.set(xPercentage);
        rotation.y.set(yPercentage);
    }

    const handleMouseLeave = () => {
        rotation.x.set(0)
        rotation.y.set(0)
    }

    return (
        <motion.div
            className="relative w-full rounded-xl shadow-card min-h-[280px] cursor-pointer"
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={expandAnimation}
            custom={index * 0.1}
            initial="initial"
            whileInView="enter"
            exit="exit"
        >
            <div className="absolute top-0 left-0 w-full h-full green-pink-gradient rounded-xl" />

            <div
                className="absolute inset-[2px] rounded-xl bg-tertiary shadow-lg py-5 px-12 flex justify-evenly items-center flex-col"
                style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                }}
            >
                <img src={icon} alt={title} className="w-16 h-16 object-contain" style={{ transform: "translateZ(50px)" }} />

                <h3 className="text-white text-[20px] font-bold text-center green-pink-text-gradient" style={{ transform: "translateZ(50px)" }}>
                    {title}
                </h3>
            </div>
        </motion.div>
    )
}

export default Tilt