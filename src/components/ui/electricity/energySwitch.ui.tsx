import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/utils/common.util";

const BULB_LIGHT_DELAY_MILLISECONDS = 1400;

/** Pressing the Energy Bill saver switch brings the electricity (and the light) back, every time you come in. */
export default function EnergySwitchUI() {
    const switchRef = useRef<HTMLButtonElement>(null);
    const isInView = useInView(switchRef, { once: true, amount: 0.8 });
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        const timeout = window.setTimeout(() => setIsOn(true), BULB_LIGHT_DELAY_MILLISECONDS);
        return () => window.clearTimeout(timeout);
    }, [isInView]);

    return (
        <div className="flex items-center gap-6">
            <button
                ref={switchRef}
                type="button"
                onClick={() => setIsOn((current) => !current)}
                aria-pressed={isOn}
                className="relative grid size-24 shrink-0 place-items-center rounded-full bg-sea-600 text-center text-xs leading-tight font-bold text-white shadow-lg shadow-sea-900/25 ring-4 ring-white transition-transform active:scale-95"
            >
                {!isOn && (
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border-4 border-lemon-400"
                        initial={{ scale: 1, opacity: 0.9 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                )}
                <span className="px-2">
                    Energy
                    <br />
                    Bill saver
                </span>
            </button>

            <motion.div
                aria-hidden="true"
                initial={false}
                animate={{ scale: isOn ? 1.08 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className={cn(
                    "grid size-24 place-items-center rounded-full transition-colors duration-500",
                    isOn ? "bg-lemon-400 shadow-[0_0_60px_var(--color-lemon-400)]" : "bg-sea-200",
                )}
            >
                <Lightbulb className={cn("size-12", isOn ? "text-sea-950" : "text-sea-500")} strokeWidth={1.6} />
            </motion.div>
        </div>
    );
}
