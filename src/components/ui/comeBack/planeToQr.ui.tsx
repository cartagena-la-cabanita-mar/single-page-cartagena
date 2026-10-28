import { motion, useReducedMotion } from "motion/react";
import PaperPlaneFlightUI from "@/components/ui/comeBack/paperPlaneFlight.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";
import { FLIGHT_ARRIVAL, FLIGHT_LOOP_SECONDS } from "@/constants/flight.constant";
import type { FlightPath } from "@/interfaces/flight.interface";

/** Coordinates are relative to the QR box (200 x 200); the plane comes in from outside the box. */
const QR_FLIGHT: FlightPath = {
    start: { x: 250, y: 250 },
    controlA: { x: 330, y: 80 },
    controlB: { x: 230, y: -50 },
    end: { x: 170, y: 22 },
};

/** The Instagram QR with a plane that lands on it; the code pops and glows when the plane arrives. */
export default function PlaneToQrUI() {
    const shouldReduceMotion = useReducedMotion();
    const pop = shouldReduceMotion
        ? undefined
        : {
              scale: [1, 1, 1.07, 1, 1],
              transition: {
                  duration: FLIGHT_LOOP_SECONDS,
                  times: [0, FLIGHT_ARRIVAL - 0.02, FLIGHT_ARRIVAL + 0.05, FLIGHT_ARRIVAL + 0.2, 1],
                  repeat: Infinity,
              },
          };

    return (
        <div className="relative mx-auto w-full max-w-52">
            <motion.div
                animate={pop}
                className="overflow-hidden rounded-3xl border-4 border-white shadow-xl shadow-sea-950/30"
            >
                <PhotoUI slug="instagram-qr" sizes="13rem" className="aspect-square w-full object-cover" />
            </motion.div>
            <svg
                viewBox="0 0 200 200"
                className="pointer-events-none absolute inset-0 size-full overflow-visible"
                aria-hidden="true"
            >
                <PaperPlaneFlightUI path={QR_FLIGHT} />
            </svg>
        </div>
    );
}
