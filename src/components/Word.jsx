import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WordAnimation = ({ text }) => {
    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    });

    const words = text.split(" ");

    return (
        <p
            className="flex flex-wrap leading-6 gap-1"
            ref={element}
            style={{ opacity: scrollYProgress }}
        >
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);

                return (
                    <Word word={word} range={[start, end]} progress={scrollYProgress} key={i} />
                )
            })}
        </p>
    )
}

const Word = ({ word, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className="relative">
            <span className="absolute opacity-25">{word}</span>
            <motion.span style={{ opacity }}>{word}</motion.span>
        </span>
    )
}

export default WordAnimation;
