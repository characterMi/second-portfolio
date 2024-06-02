import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const CurveText = () => {
    const ref = useRef(null);
    const texts = useRef([])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', "start -0.2"]
    })

    useEffect(() => {
        scrollYProgress.on("change", e => {
            texts.current.forEach((text, i) => {
                text.setAttribute("startOffset", -30 + (i * 40) + (e * 40) + "%")
            })
        })
    }, [])

    return (
        <div ref={ref} className="block md:hidden">
            <svg viewBox="0 0 250 90" className="fill-primary">
                <path id="path" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                <text className="text-[9px] fill-secondary uppercase">
                    {[...Array(3)].map((_, i) => (
                        <textPath
                            key={i}
                            className="transition"
                            ref={ref => texts.current[i] = ref}
                            href="#path"
                            startOffset={i * 40 + "%"}
                        >
                            Abolfazl Taghadosi
                        </textPath>
                    ))}
                </text>
            </svg>
        </div>
    )
}

export default CurveText