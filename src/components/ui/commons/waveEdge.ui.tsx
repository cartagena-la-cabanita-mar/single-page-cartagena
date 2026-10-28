import { cn } from "@/utils/common.util";

interface WaveEdgeUIProps {
    className?: string;
}

const WAVE_PERIOD = "c120 -40 240 -40 360 0 c120 40 240 40 360 0";
const WAVE_PATH = `M0 60 ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} ${WAVE_PERIOD} V100 H0 Z`;

/** Sea foam along the top edge of a section. It takes its colour from the text colour of `className`. */
export default function WaveEdgeUI({ className }: WaveEdgeUIProps) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-x-0 bottom-full -mb-px h-8 overflow-hidden sm:h-12 lg:h-16",
                className,
            )}
        >
            <svg
                viewBox="0 0 2880 100"
                preserveAspectRatio="none"
                fill="currentColor"
                className="animate-drift-slow absolute bottom-0 left-0 h-full w-[200%] opacity-40"
            >
                <path d={WAVE_PATH} />
            </svg>
            <svg
                viewBox="0 0 2880 100"
                preserveAspectRatio="none"
                fill="currentColor"
                className="animate-drift absolute bottom-0 left-0 h-[78%] w-[200%]"
            >
                <path d={WAVE_PATH} />
            </svg>
        </div>
    );
}
