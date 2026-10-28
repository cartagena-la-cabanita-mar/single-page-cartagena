import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useTranslation } from "react-i18next";
import { FAN_MAX_SPEED } from "@/constants/apartment.constant";
import { cn } from "@/utils/common.util";

const DEGREES_PER_SECOND_AT_LEVEL_ONE = 110;
/** How long the blades take to settle on a new speed, like a real motor with some inertia. */
const SPIN_INERTIA_MILLISECONDS = 900;
const BLADE_ANGLES = [0, 90, 180, 270];
const SPEED_LEVELS = Array.from({ length: FAN_MAX_SPEED }, (_, index) => index + 1);

/** The ceiling fan remote, working: press a number to spin the blades, FAN OFF to let them wind down. */
export default function FanDemoUI() {
    const { t } = useTranslation("remoteControls");
    const [speed, setSpeed] = useState(0);
    const rotation = useMotionValue(0);
    const targetSpeedRef = useRef(0);
    const currentSpeedRef = useRef(0);

    function selectSpeed(level: number) {
        targetSpeedRef.current = level;
        setSpeed(level);
    }

    useAnimationFrame((_, delta) => {
        const blend = Math.min(1, delta / SPIN_INERTIA_MILLISECONDS);
        currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * blend;
        const step = currentSpeedRef.current * DEGREES_PER_SECOND_AT_LEVEL_ONE * (delta / 1000);
        rotation.set((rotation.get() + step) % 360);
    });

    return (
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
            <svg viewBox="-100 -100 200 200" className="size-48 shrink-0 sm:size-56" aria-hidden="true">
                <circle r={96} className="fill-sea-100" />
                <motion.g style={{ rotate: rotation }}>
                    {BLADE_ANGLES.map((angle) => (
                        <ellipse
                            key={angle}
                            cx={0}
                            cy={-52}
                            rx={17}
                            ry={46}
                            transform={`rotate(${angle})`}
                            className="fill-sea-600"
                        />
                    ))}
                </motion.g>
                <circle r={17} className="fill-lemon-400" />
                <circle r={6} className="fill-sea-800" />
            </svg>

            <div className="w-full max-w-xs rounded-4xl bg-sea-950 p-5 text-white shadow-xl shadow-sea-950/30">
                <div className="flex items-center justify-between gap-3">
                    <button
                        type="button"
                        onClick={() => selectSpeed(0)}
                        className={cn(
                            "rounded-full px-4 py-2 text-xs font-extrabold tracking-wide transition-colors",
                            speed === 0 ? "bg-lemon-400 text-sea-950" : "bg-white/10 text-white hover:bg-white/20",
                        )}
                    >
                        FAN OFF
                    </button>
                    <p className="text-sm text-white/70" aria-live="polite">
                        {speed === 0 ? t("fan.stopped") : `${t("fan.speed")} ${speed}`}
                    </p>
                </div>

                <div className="mt-5 flex justify-between gap-2">
                    {SPEED_LEVELS.map((level) => (
                        <button
                            key={level}
                            type="button"
                            onClick={() => selectSpeed(level)}
                            aria-pressed={speed === level}
                            className={cn(
                                "grid size-11 place-items-center rounded-full text-lg font-bold transition-colors",
                                speed === level
                                    ? "bg-lemon-400 text-sea-950"
                                    : "bg-white/10 text-white hover:bg-white/20",
                            )}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
