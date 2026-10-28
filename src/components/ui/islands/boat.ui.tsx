import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Transition, Variants } from "motion/react";

const RUN_SECONDS = 44;
const BOB_SECONDS = 5.5;
/** The boat holds still at each end for 4% of the run, which is when it turns around to sail back. */
const RUN_TIMES = [0, 0.46, 0.5, 0.96, 1];
const RUN_TRANSITION: Transition = { duration: RUN_SECONDS, times: RUN_TIMES, ease: "easeInOut", repeat: Infinity };
const BOB_TRANSITION: Transition = { duration: BOB_SECONDS, ease: "easeInOut", repeat: Infinity };
const STILL_TRANSITION: Transition = { duration: 0 };

const TRACK_VARIANTS: Variants = {
    docked: { x: "0%", transition: STILL_TRANSITION },
    sailing: { x: ["0%", "100%", "100%", "0%", "0%"], transition: RUN_TRANSITION },
};

const HULL_VARIANTS: Variants = {
    docked: { scaleX: 1, y: 0, rotate: 0, transition: STILL_TRANSITION },
    sailing: {
        scaleX: [1, 1, -1, -1, 1],
        y: [0, -4, 0],
        rotate: [-2, 2, -2],
        transition: { scaleX: RUN_TRANSITION, y: BOB_TRANSITION, rotate: BOB_TRANSITION },
    },
};

const WAVE_HALF_PERIODS = 64;
const FRONT_WAVE_PATH = `M0 10q12-9 24 0${"t24 0".repeat(WAVE_HALF_PERIODS)}`;
const BACK_WAVE_PATH = `M-12 24q12-9 24 0${"t24 0".repeat(WAVE_HALF_PERIODS)}`;

/** A sailboat that crosses the strip, turns at the far end and comes back, only while the strip is on screen. */
export default function BoatUI() {
    const stripRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(stripRef);

    return (
        <div ref={stripRef} aria-hidden="true" className="relative h-28 w-full">
            <motion.div
                className="absolute bottom-4 left-0 w-[calc(100%-6rem)]"
                variants={TRACK_VARIANTS}
                initial="docked"
                animate={isInView ? "sailing" : "docked"}
            >
                <motion.div className="w-24 origin-bottom" variants={HULL_VARIANTS}>
                    <svg viewBox="0 0 120 96" className="block w-full">
                        <path d="M62 6C64 28 86 50 108 64H62Z" className="fill-white" />
                        <path d="M55 14C48 36 34 54 14 64H55Z" className="fill-sea-200" />
                        <rect x="57" y="3" width="3.5" height="65" rx="1.75" className="fill-white" />
                        <path d="M60.5 4L78 8.5L60.5 13Z" className="fill-lemon-300" />
                        <path d="M6 68H114C110 80 102 90 88 92H32C18 90 10 80 6 68Z" className="fill-lemon-400" />
                        <path
                            d="M8.5 73H111.5C110.9 75 110.2 76.6 109.5 78H10.5C9.8 76.6 9.1 75 8.5 73Z"
                            className="fill-sea-600"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            <svg className="absolute inset-x-0 bottom-0 h-8 w-full" fill="none" strokeWidth="2.5" strokeLinecap="round">
                <path d={BACK_WAVE_PATH} className="stroke-sea-400" />
                <path d={FRONT_WAVE_PATH} className="stroke-sea-300" />
            </svg>
        </div>
    );
}
