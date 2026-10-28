import { motion } from "motion/react";

interface PadlockUIProps {
    isOpen: boolean;
}

/** A lemon padlock: when the right code is typed its shackle lifts and swings wide open, and it stays open. */
export default function PadlockUI({ isOpen }: PadlockUIProps) {
    return (
        <svg viewBox="0 0 48 58" className="h-14 w-12 shrink-0 overflow-visible drop-shadow-md" aria-hidden="true">
            <motion.path
                d="M14 26V17a10 10 0 0 1 20 0v9"
                fill="none"
                strokeWidth={5}
                strokeLinecap="round"
                className="stroke-sea-700"
                style={{ originX: "34px", originY: "26px" }}
                initial={false}
                animate={{ y: isOpen ? -10 : 0, rotate: isOpen ? -55 : 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 11 }}
            />
            <rect
                x={6}
                y={26}
                width={36}
                height={28}
                rx={7}
                className="fill-lemon-400 stroke-sea-700"
                strokeWidth={3}
            />
            <circle cx={24} cy={38} r={4.5} className="fill-sea-800" />
            <rect x={22} y={40} width={4} height={8} rx={2} className="fill-sea-800" />
        </svg>
    );
}
