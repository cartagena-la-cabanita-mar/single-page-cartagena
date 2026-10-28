import { motion, useReducedMotion } from "motion/react";
import { FLIGHT_ARRIVAL, FLIGHT_LOOP_SECONDS, FLIGHT_SAMPLE_COUNT } from "@/constants/flight.constant";
import type { FlightPath } from "@/interfaces/flight.interface";
import { sampleFlight, toSvgPath } from "@/utils/flight.util";

interface PaperPlaneFlightUIProps {
    path: FlightPath;
}

const STATIC_STEP = 18;

function PaperPlaneUI() {
    return (
        <g>
            <path
                d="M16 0-14-12-8 0-14 12Z"
                className="fill-white stroke-lemon-400"
                strokeWidth={2}
                strokeLinejoin="round"
            />
            <path d="M16 0-8 0" className="stroke-sea-300" strokeWidth={1.5} />
        </g>
    );
}

/** A paper plane that follows a dashed curve in a loop and disappears where the target is. Draw it inside an `<svg>`. */
export default function PaperPlaneFlightUI({ path }: PaperPlaneFlightUIProps) {
    const shouldReduceMotion = useReducedMotion();
    const points = sampleFlight(path);
    const last = points[FLIGHT_SAMPLE_COUNT];
    const times = [...points.map((_, step) => (step / FLIGHT_SAMPLE_COUNT) * FLIGHT_ARRIVAL), 1];
    const linearLoop = { duration: FLIGHT_LOOP_SECONDS, times, ease: "linear" as const, repeat: Infinity };

    return (
        <g>
            <path
                d={toSvgPath(path)}
                fill="none"
                strokeWidth={2.5}
                strokeDasharray="3 9"
                strokeLinecap="round"
                className="stroke-white/50"
            />
            {shouldReduceMotion ? (
                <g
                    transform={`translate(${points[STATIC_STEP].x} ${points[STATIC_STEP].y}) rotate(${points[STATIC_STEP].angle})`}
                >
                    <PaperPlaneUI />
                </g>
            ) : (
                <motion.g
                    initial={{ x: points[0].x, y: points[0].y, rotate: points[0].angle, opacity: 0 }}
                    animate={{
                        x: [...points.map(({ x }) => x), last.x],
                        y: [...points.map(({ y }) => y), last.y],
                        rotate: [...points.map(({ angle }) => angle), last.angle],
                        opacity: [0, 1, 1, 0, 0],
                    }}
                    transition={{
                        x: linearLoop,
                        y: linearLoop,
                        rotate: linearLoop,
                        opacity: {
                            duration: FLIGHT_LOOP_SECONDS,
                            times: [0, 0.04, FLIGHT_ARRIVAL - 0.02, FLIGHT_ARRIVAL + 0.03, 1],
                            repeat: Infinity,
                        },
                    }}
                >
                    <PaperPlaneUI />
                </motion.g>
            )}
        </g>
    );
}
