import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Snowflake, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/utils/common.util";

const WINDOW_CLOSE_DELAY_MILLISECONDS = 900;
const SNOWFLAKE_COUNT = 7;

/** A sliding window: with it open the cool air escapes, with it closed the air conditioning does its job. */
export default function AcWindowUI() {
    const { t } = useTranslation("airConditioning");
    const windowRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(windowRef, { once: true, amount: 0.7 });
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        const timeout = window.setTimeout(() => setIsClosed(true), WINDOW_CLOSE_DELAY_MILLISECONDS);
        return () => window.clearTimeout(timeout);
    }, [isInView]);

    return (
        <div ref={windowRef} className="mx-auto w-full max-w-sm">
            <div
                className={cn(
                    "relative aspect-4/5 overflow-hidden rounded-t-[40%] border-8 border-sea-700 transition-colors duration-700",
                    isClosed ? "bg-sea-100" : "bg-lemon-100",
                )}
            >
                {isClosed ? (
                    Array.from({ length: SNOWFLAKE_COUNT }, (_, index) => (
                        <motion.span
                            key={index}
                            aria-hidden="true"
                            className="absolute text-sea-400"
                            style={{ left: `${8 + index * 13}%` }}
                            initial={{ y: "-20%", opacity: 0 }}
                            animate={{ y: "520%", opacity: [0, 1, 1, 0], rotate: 180 }}
                            transition={{
                                duration: 4 + (index % 3),
                                repeat: Infinity,
                                delay: index * 0.5,
                                ease: "linear",
                            }}
                        >
                            <Snowflake className="size-6" />
                        </motion.span>
                    ))
                ) : (
                    <Sun
                        className="animate-spin-slow absolute top-6 right-6 size-14 text-lemon-500"
                        aria-hidden="true"
                    />
                )}

                <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1/2 border-r-8 border-sea-700 bg-sea-300/50"
                    initial={false}
                    animate={{ x: isClosed ? "0%" : "-82%" }}
                    transition={{ type: "spring", stiffness: 90, damping: 16 }}
                />
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-0 w-1/2 bg-sea-300/50"
                    initial={false}
                    animate={{ x: isClosed ? "0%" : "82%" }}
                    transition={{ type: "spring", stiffness: 90, damping: 16 }}
                />
            </div>

            <button
                type="button"
                onClick={() => setIsClosed((current) => !current)}
                aria-pressed={isClosed}
                aria-label={t("toggle")}
                className={cn(
                    "mt-5 w-full rounded-full px-5 py-3 text-base font-bold transition-colors",
                    isClosed ? "bg-sea-600 text-white" : "bg-lemon-400 text-sea-950",
                )}
            >
                {isClosed ? t("closed") : t("open")}
            </button>
        </div>
    );
}
