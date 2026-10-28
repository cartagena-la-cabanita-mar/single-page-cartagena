import { motion } from "motion/react";
import { cn } from "@/utils/common.util";

interface AwningUIProps {
    stripes?: number;
    isAnimated?: boolean;
    className?: string;
}

const STRIPE_WIDTH = 100;
const STRIPE_HEIGHT = 92;
const SCALLOP_DEPTH = 30;

/** Blue and white beach awning with scalloped edge. It unrolls once and then sways gently. */
export default function AwningUI({ stripes = 18, isAnimated = true, className }: AwningUIProps) {
    const width = stripes * STRIPE_WIDTH;

    return (
        <motion.div
            aria-hidden="true"
            className={cn("origin-top", className)}
            initial={isAnimated ? { scaleY: 0 } : false}
            animate={{ scaleY: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 13, mass: 1.2, delay: 0.1 }}
        >
            <div className={isAnimated ? "animate-sway" : undefined}>
                <svg
                    viewBox={`0 0 ${width} ${STRIPE_HEIGHT + SCALLOP_DEPTH}`}
                    preserveAspectRatio="none"
                    className="block h-full w-full drop-shadow-lg"
                >
                    {Array.from({ length: stripes }, (_, index) => (
                        <g key={index} className={index % 2 === 0 ? "fill-sea-600" : "fill-white"}>
                            <rect x={index * STRIPE_WIDTH} y={0} width={STRIPE_WIDTH} height={STRIPE_HEIGHT} />
                            <path
                                d={`M${index * STRIPE_WIDTH} ${STRIPE_HEIGHT} a${STRIPE_WIDTH / 2} ${SCALLOP_DEPTH} 0 0 0 ${STRIPE_WIDTH} 0Z`}
                            />
                        </g>
                    ))}
                    <rect width={width} height={26} className="fill-sea-950/15" />
                </svg>
            </div>
        </motion.div>
    );
}
