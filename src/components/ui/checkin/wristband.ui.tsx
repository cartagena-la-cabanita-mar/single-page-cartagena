import { motion } from "motion/react";

/** The wristband handed out at the lobby, drawn once when it scrolls into view. */
export default function WristbandUI() {
    return (
        <svg viewBox="0 0 170 104" className="w-40 shrink-0" aria-hidden="true">
            <motion.ellipse
                cx={85}
                cy={54}
                rx={64}
                ry={34}
                fill="none"
                strokeWidth={16}
                className="stroke-sea-600"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
            />
            <ellipse
                cx={85}
                cy={54}
                rx={64}
                ry={34}
                fill="none"
                strokeWidth={4}
                strokeDasharray="6 14"
                className="stroke-white/70"
            />
            <rect x={70} y={10} width={30} height={22} rx={5} className="fill-lemon-400" />
            <rect x={76} y={16} width={18} height={10} rx={3} className="fill-lemon-600/40" />
        </svg>
    );
}
