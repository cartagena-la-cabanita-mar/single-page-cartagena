import { motion, useScroll, useSpring, useTransform } from "motion/react";

const WAVE_PERIOD = "c90 -30 180 -30 270 0 c90 30 180 30 270 0";
const WAVE_PATH = `M0 30 ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} V120 H0 Z`;

/** Water that rises from the bottom of the sidebar as the guest reads further down the guide. */
export default function TideFillUI() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
    const tideTop = useTransform(smoothProgress, [0, 1], ["94%", "0%"]);

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div className="absolute inset-x-0 bottom-0 h-full text-sea-400/20" style={{ y: tideTop }}>
                <svg
                    viewBox="0 0 2160 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    className="animate-drift absolute top-0 left-0 h-6 w-[200%]"
                >
                    <path d={WAVE_PATH} />
                </svg>
                <div className="absolute inset-x-0 top-5 bottom-0 bg-current" />
            </motion.div>
        </div>
    );
}
