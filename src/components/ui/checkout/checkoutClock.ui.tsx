import { useRef } from "react";
import { motion, useInView } from "motion/react";

const TICK_COUNT = 12;
const HOUR_HAND_END_DEGREES = 330;

/** An analog clock that sweeps to 11:00 when it scrolls into view. */
export default function CheckoutClockUI() {
    const clockRef = useRef<SVGSVGElement>(null);
    const isInView = useInView(clockRef, { once: true, amount: 0.6 });

    return (
        <svg ref={clockRef} viewBox="-110 -110 220 220" className="mx-auto size-56 sm:size-64" aria-hidden="true">
            <circle r={104} className="fill-lemon-400" />
            <circle r={92} className="fill-white" />
            {Array.from({ length: TICK_COUNT }, (_, index) => (
                <line
                    key={index}
                    x1={0}
                    y1={-82}
                    x2={0}
                    y2={index % 3 === 0 ? -68 : -74}
                    strokeWidth={index % 3 === 0 ? 5 : 3}
                    strokeLinecap="round"
                    transform={`rotate(${(360 / TICK_COUNT) * index})`}
                    className="stroke-sea-700"
                />
            ))}
            <motion.line
                x1={0}
                y1={8}
                x2={0}
                y2={-52}
                strokeWidth={8}
                strokeLinecap="round"
                className="stroke-sea-900"
                initial={{ rotate: 0 }}
                animate={{ rotate: isInView ? HOUR_HAND_END_DEGREES : 0 }}
                transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.line
                x1={0}
                y1={14}
                x2={0}
                y2={-76}
                strokeWidth={4}
                strokeLinecap="round"
                className="stroke-sea-600"
                initial={{ rotate: 0 }}
                animate={{ rotate: isInView ? 720 : 0 }}
                transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <circle r={7} className="fill-sea-900" />
        </svg>
    );
}
