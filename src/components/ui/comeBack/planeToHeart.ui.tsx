import { motion, useReducedMotion } from "motion/react";
import PaperPlaneFlightUI from "@/components/ui/comeBack/paperPlaneFlight.ui";
import { FLIGHT_ARRIVAL, FLIGHT_LOOP_SECONDS } from "@/constants/flight.constant";
import type { FlightPath } from "@/interfaces/flight.interface";

const HEART_CENTER = { x: 336, y: 112 };
const HEART_SHAPE = "M0 14C-22 -2 -14 -22 0 -10 14 -22 22 -2 0 14Z";

const HEART_FLIGHT: FlightPath = {
    start: { x: 24, y: 172 },
    controlA: { x: 120, y: 14 },
    controlB: { x: 250, y: 6 },
    end: { x: HEART_CENTER.x - 12, y: HEART_CENTER.y - 8 },
};

const BURST_HEARTS = [
    { dx: -26, rise: 48, size: 0.45 },
    { dx: 8, rise: 66, size: 0.38 },
    { dx: 30, rise: 44, size: 0.5 },
];

const BEAT_TIMES = [0, FLIGHT_ARRIVAL - 0.02, FLIGHT_ARRIVAL + 0.06, FLIGHT_ARRIVAL + 0.2, 1];

/** The plane flies in a loop and lands on a heart, which answers with a beat and a few little hearts. */
export default function PlaneToHeartUI() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <svg viewBox="0 0 400 200" className="w-full max-w-lg" aria-hidden="true">
            <PaperPlaneFlightUI path={HEART_FLIGHT} />

            <g transform={`translate(${HEART_CENTER.x} ${HEART_CENTER.y})`}>
                <motion.path
                    d={HEART_SHAPE}
                    className="fill-error"
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  scale: [1, 1, 1.5, 1, 1],
                                  transition: { duration: FLIGHT_LOOP_SECONDS, times: BEAT_TIMES, repeat: Infinity },
                              }
                    }
                />
                {!shouldReduceMotion &&
                    BURST_HEARTS.map(({ dx, rise, size }) => (
                        <motion.path
                            key={dx}
                            d={HEART_SHAPE}
                            className="fill-error"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0, 1, 0, 0],
                                x: [0, 0, dx, dx, 0],
                                y: [0, 0, -rise, -rise - 14, 0],
                                scale: size,
                            }}
                            transition={{
                                duration: FLIGHT_LOOP_SECONDS,
                                times: [0, FLIGHT_ARRIVAL, FLIGHT_ARRIVAL + 0.08, FLIGHT_ARRIVAL + 0.25, 1],
                                repeat: Infinity,
                            }}
                        />
                    ))}
            </g>
        </svg>
    );
}
