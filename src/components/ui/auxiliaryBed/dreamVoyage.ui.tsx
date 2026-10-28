import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const WAVE_PERIOD = "c90 -30 180 -30 270 0 c90 30 180 30 270 0";
const WAVE_PATH = `M0 30 ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} V120 H0 Z`;

/** Star positions (percent of the scene), size in pixels and twinkle delay in seconds. */
const STARS = [
    { left: 6, top: 10, size: 3, delay: 0 },
    { left: 14, top: 30, size: 2, delay: 0.8 },
    { left: 22, top: 8, size: 4, delay: 1.4 },
    { left: 31, top: 22, size: 2, delay: 0.3 },
    { left: 38, top: 6, size: 3, delay: 1.9 },
    { left: 47, top: 28, size: 2, delay: 1.1 },
    { left: 55, top: 12, size: 4, delay: 0.5 },
    { left: 63, top: 34, size: 2, delay: 2.2 },
    { left: 70, top: 9, size: 3, delay: 1.6 },
    { left: 78, top: 24, size: 2, delay: 0.2 },
    { left: 86, top: 14, size: 4, delay: 1.2 },
    { left: 93, top: 32, size: 3, delay: 2.6 },
    { left: 10, top: 48, size: 2, delay: 1.7 },
    { left: 42, top: 44, size: 3, delay: 0.9 },
    { left: 74, top: 46, size: 2, delay: 2.0 },
    { left: 90, top: 52, size: 3, delay: 0.6 },
];

const CLOUDS = [
    { top: "18%", left: "8%", width: "7rem", duration: 14 },
    { top: "40%", left: "62%", width: "9rem", duration: 18 },
    { top: "58%", left: "22%", width: "6rem", duration: 16 },
];

function CloudUI() {
    return (
        <svg viewBox="0 0 120 50" className="size-full fill-white" aria-hidden="true">
            <path d="M18 44a14 14 0 0 1 2-28 20 20 0 0 1 38-6 18 18 0 0 1 30 10 15 15 0 0 1 14 24Z" />
        </svg>
    );
}

/** The striped bed turned into a paper boat: mattress, headboard and a lemon pillow on a folded hull. */
function BedBoatUI() {
    return (
        <svg viewBox="0 0 160 120" className="w-40 drop-shadow-xl sm:w-52" aria-hidden="true">
            <rect x={24} y={34} width={9} height={46} rx={3} className="fill-sea-700" />
            <rect x={31} y={54} width={104} height={26} rx={7} className="fill-white stroke-sea-600" strokeWidth={2} />
            {[0, 1, 2, 3, 4].map((stripe) => (
                <rect key={stripe} x={43 + stripe * 19} y={55} width={9} height={24} className="fill-sea-600" />
            ))}
            <rect
                x={36}
                y={42}
                width={30}
                height={16}
                rx={7}
                className="fill-lemon-300 stroke-lemon-600"
                strokeWidth={1.5}
            />
            <path
                d="M8 80H152L130 106H30Z"
                className="fill-lemon-400 stroke-sea-600"
                strokeWidth={2.4}
                strokeLinejoin="round"
            />
            <path d="M8 80 30 106M152 80 130 106" className="stroke-lemon-600" strokeWidth={1.6} />
        </svg>
    );
}

/** The bed-boat leaves the sea and, as the page scrolls, climbs through the clouds into a sky full of stars. */
export default function DreamVoyageUI() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start end", "end start"] });
    const boatY = useTransform(scrollYProgress, [0.1, 0.9], ["42%", "-38%"]);
    const boatX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ["-18%", "12%", "-6%"]);
    const boatTilt = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [-7, 5, -3]);
    const nightOpacity = useTransform(scrollYProgress, [0.25, 0.7], [0, 1]);
    const starsOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

    return (
        <div
            ref={sceneRef}
            aria-hidden="true"
            className="relative isolate h-80 w-full overflow-hidden rounded-4xl bg-linear-to-b from-sea-300 via-sea-400 to-sea-600 shadow-xl shadow-sea-900/20 sm:h-[26rem]"
        >
            <motion.div
                className="absolute inset-0 bg-linear-to-b from-sea-950 via-sea-900 to-sea-700"
                style={{ opacity: shouldReduceMotion ? 0.6 : nightOpacity }}
            />

            <motion.div className="absolute inset-0" style={{ opacity: shouldReduceMotion ? 0.8 : starsOpacity }}>
                {STARS.map(({ left, top, size, delay }) => (
                    <motion.span
                        key={`${left}-${top}`}
                        className="absolute rounded-full bg-lemon-100"
                        style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
                        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.3, 0.8] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay }}
                    />
                ))}
                <span className="absolute top-[12%] right-[10%] size-12 rounded-full bg-lemon-300 shadow-[0_0_40px_var(--color-lemon-300)]">
                    <span className="absolute top-1 left-3 size-12 rounded-full bg-sea-900" />
                </span>
            </motion.div>

            {CLOUDS.map(({ top, left, width, duration }) => (
                <motion.div
                    key={`${top}-${left}`}
                    className="absolute opacity-80"
                    style={{ top, left, width }}
                    animate={{ x: [0, 36, 0] }}
                    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
                >
                    <CloudUI />
                </motion.div>
            ))}

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                style={shouldReduceMotion ? { y: "-10%" } : { y: boatY, x: boatX, rotate: boatTilt }}
            >
                <div className="animate-paddle">
                    <BedBoatUI />
                </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden text-sea-700">
                <svg
                    viewBox="0 0 2160 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    className="animate-drift absolute bottom-0 left-0 h-full w-[200%]"
                >
                    <path d={WAVE_PATH} />
                </svg>
            </div>
        </div>
    );
}
