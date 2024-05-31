import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { styles } from "../style";

const CharacterAnimation = ({ text, textStyle }) => {
    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.95', 'start 0.6']
    });

    const words = text.split(" ");

    return (
        <p
            className={`${styles[textStyle]} flex flex-wrap leading-6 gap-1 mb-5 min-[450px]:mb-8`}
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
    const characters = word.split("");
    const amount = range[1] - range[0];
    const step = amount / word.length;

    return (
        <span className="flex leading-6">
            {characters.map((character, i) => {
                const start = range[0] + (step * i)
                const end = range[0] + (step * (i + 1))

                return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
            })}
        </span>
    )
}

const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className="relative">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}

export default CharacterAnimation;
