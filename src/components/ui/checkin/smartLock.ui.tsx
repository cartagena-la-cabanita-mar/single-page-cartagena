import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";

const KEYPAD_LIGHT_DELAY_MILLISECONDS = 1600;

/** The smart lock: tap the screen and the keypad lights up, exactly as it does at the apartment door. */
export default function SmartLockUI() {
    const { t } = useTranslation("checkin");
    const lockRef = useRef<HTMLButtonElement>(null);
    const isInView = useInView(lockRef, { once: true, amount: 0.6 });
    const [isLit, setIsLit] = useState(false);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        const timeout = window.setTimeout(() => setIsLit(true), KEYPAD_LIGHT_DELAY_MILLISECONDS);
        return () => window.clearTimeout(timeout);
    }, [isInView]);

    return (
        <div className="relative mx-auto w-full max-w-60">
            <button
                ref={lockRef}
                type="button"
                onClick={() => setIsLit((current) => !current)}
                aria-pressed={isLit}
                aria-label={`${t("door.tap")} / ${t("door.enter")}`}
                className="relative block aspect-3/5 w-full overflow-hidden rounded-t-full rounded-b-3xl border-4 border-white bg-sea-950 shadow-xl shadow-sea-900/20"
            >
                <PhotoUI slug="lock-idle" sizes="15rem" className="absolute inset-0 size-full object-cover" />
                <motion.div
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: isLit ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <PhotoUI slug="lock-keypad" sizes="15rem" className="size-full object-cover" />
                </motion.div>
                {!isLit && (
                    <motion.span
                        aria-hidden="true"
                        className="absolute top-[34%] left-[46%] size-14 rounded-full border-4 border-lemon-400"
                        initial={{ scale: 0.3, opacity: 0.9 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                    />
                )}
            </button>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isLit ? "enter" : "tap"}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        <HandNoteUI tilt={isLit ? "right" : "left"}>
                            {isLit ? t("door.enter") : t("door.tap")}
                        </HandNoteUI>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
