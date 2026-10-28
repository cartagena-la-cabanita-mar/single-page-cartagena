import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { POOL_CLOSING_HOUR, POOL_OPENING_HOUR } from "@/constants/apartment.constant";
import { Language } from "@/enums/language.enum";
import { formatHour } from "@/utils/format.util";

const ARC_CENTER = 100;
const ARC_RADIUS = 80;
const SUN_STEPS = 12;

const SUN_PATH = Array.from({ length: SUN_STEPS + 1 }, (_, step) => {
    const angle = Math.PI * (1 - step / SUN_STEPS);
    return { x: ARC_CENTER + ARC_RADIUS * Math.cos(angle), y: ARC_CENTER - ARC_RADIUS * Math.sin(angle) };
});

/** The pool day drawn as the path of the sun, from opening hour to closing hour. */
export default function PoolHoursUI() {
    const { i18n } = useTranslation("commonAreas");
    const locale = i18n.resolvedLanguage ?? Language.Spanish;

    return (
        <figure className="w-full max-w-xs">
            <svg viewBox="0 0 200 128" className="w-full" aria-hidden="true">
                <path
                    d={`M${ARC_CENTER - ARC_RADIUS} ${ARC_CENTER} A${ARC_RADIUS} ${ARC_RADIUS} 0 0 1 ${ARC_CENTER + ARC_RADIUS} ${ARC_CENTER}`}
                    fill="none"
                    strokeWidth={4}
                    strokeDasharray="2 9"
                    strokeLinecap="round"
                    className="stroke-sea-400"
                />
                <line x1={6} y1={ARC_CENTER} x2={194} y2={ARC_CENTER} strokeWidth={4} className="stroke-lagoon-400" />
                <motion.circle
                    r={11}
                    className="fill-lemon-400"
                    initial={{ cx: SUN_PATH[0].x, cy: SUN_PATH[0].y }}
                    whileInView={{ cx: SUN_PATH.map(({ x }) => x), cy: SUN_PATH.map(({ y }) => y) }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 3.2, ease: "linear" }}
                />
                <text x={20} y={122} textAnchor="middle" className="fill-sea-800 text-[11px] font-bold">
                    {formatHour(POOL_OPENING_HOUR, locale)}
                </text>
                <text x={180} y={122} textAnchor="middle" className="fill-sea-800 text-[11px] font-bold">
                    {formatHour(POOL_CLOSING_HOUR, locale)}
                </text>
            </svg>
        </figure>
    );
}
