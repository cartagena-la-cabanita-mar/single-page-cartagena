import { useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { MotionValue } from "motion/react";
import { cn } from "@/utils/common.util";

const WAKE_DOT_COUNT = 6;
const MAX_TILT_DEGREES = 26;
const TILT_PER_PIXEL = 2.2;
const TILT_DECAY_PER_FRAME = 0.88;
const CLICKABLE_SELECTOR = "a, button, summary, label, select, [role='button'], [role='tab']";
const NATIVE_CURSOR_SELECTOR = "input, textarea, select, video";
const WAKE_INDEXES = Array.from({ length: WAKE_DOT_COUNT }, (_, index) => index);

interface WakeDotUIProps {
    x: MotionValue<number>;
    y: MotionValue<number>;
    index: number;
}

/** One ripple of the boat's wake: it chases the boat a little slower than the one before it. */
function WakeDotUI({ x, y, index }: WakeDotUIProps) {
    const followX = useSpring(x, { stiffness: 260 - index * 36, damping: 26 });
    const followY = useSpring(y, { stiffness: 260 - index * 36, damping: 26 });
    const size = 10 - index;

    return (
        <motion.span
            className="absolute top-0 left-0 rounded-full bg-sea-300"
            style={{
                x: followX,
                y: followY,
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: 18 - size / 2,
                opacity: 0.55 - index * 0.08,
            }}
        />
    );
}

/** A paper boat that sails after the mouse: it leans into turns, bobs on the water, leaves a wake and sinks a little when clicking. */
export default function BoatCursorUI() {
    const shouldReduceMotion = useReducedMotion();
    const [isVisible, setIsVisible] = useState(false);
    const [isOnClickable, setIsOnClickable] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const tiltTarget = useMotionValue(0);
    const tilt = useSpring(tiltTarget, { stiffness: 140, damping: 12 });
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const isEnabled = hasMouse && !shouldReduceMotion;

    useAnimationFrame(() => {
        tiltTarget.set(tiltTarget.get() * TILT_DECAY_PER_FRAME);
    });

    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        function handleMove(event: PointerEvent) {
            const target = event.target instanceof Element ? event.target : null;
            x.set(event.clientX);
            y.set(event.clientY);
            tiltTarget.set(
                Math.max(
                    -MAX_TILT_DEGREES,
                    Math.min(MAX_TILT_DEGREES, tiltTarget.get() + event.movementX * TILT_PER_PIXEL),
                ),
            );
            setIsOnClickable(target?.closest(CLICKABLE_SELECTOR) != null);
            setIsVisible(target?.closest(NATIVE_CURSOR_SELECTOR) == null);
        }

        const handleDown = () => setIsPressed(true);
        const handleUp = () => setIsPressed(false);
        const handleLeave = () => setIsVisible(false);

        document.documentElement.classList.add("boat-cursor");
        window.addEventListener("pointermove", handleMove, { passive: true });
        window.addEventListener("pointerdown", handleDown);
        window.addEventListener("pointerup", handleUp);
        document.documentElement.addEventListener("mouseleave", handleLeave);

        return () => {
            document.documentElement.classList.remove("boat-cursor");
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerdown", handleDown);
            window.removeEventListener("pointerup", handleUp);
            document.documentElement.removeEventListener("mouseleave", handleLeave);
        };
    }, [isEnabled, tiltTarget, x, y]);

    if (!isEnabled) {
        return null;
    }

    return (
        <div
            aria-hidden="true"
            className={cn(
                "pointer-events-none fixed inset-0 z-100 transition-opacity duration-200",
                isVisible ? "opacity-100" : "opacity-0",
            )}
        >
            {WAKE_INDEXES.map((index) => (
                <WakeDotUI key={index} x={x} y={y} index={index} />
            ))}
            <motion.div className="absolute top-0 left-0" style={{ x, y }}>
                <motion.div
                    className="-translate-x-4 -translate-y-[3px] origin-[50%_85%]"
                    style={{ rotate: tilt }}
                    animate={{ scale: isPressed ? 0.82 : isOnClickable ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                    <div className="animate-paddle origin-[50%_85%]">
                        <svg viewBox="0 0 32 32" className="size-8 drop-shadow-md">
                            <path
                                d="M16 3 26 19H6Z"
                                strokeWidth={1.6}
                                strokeLinejoin="round"
                                className={cn(
                                    "stroke-sea-600 transition-colors",
                                    isOnClickable ? "fill-lemon-400" : "fill-white",
                                )}
                            />
                            <path d="M16 3v16" strokeWidth={1.2} className="stroke-sea-600" />
                            <path
                                d="M3 19h26l-5 8H8Z"
                                strokeWidth={1.6}
                                strokeLinejoin="round"
                                className={cn(
                                    "stroke-sea-600 transition-colors",
                                    isOnClickable ? "fill-sea-600" : "fill-lemon-400",
                                )}
                            />
                        </svg>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
