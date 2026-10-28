interface LemonUIProps {
    className?: string;
}

export default function LemonUI({ className }: LemonUIProps) {
    return (
        <svg viewBox="0 0 120 96" className={className} aria-hidden="true">
            <defs>
                <radialGradient id="lemon-gradient" cx="34%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="var(--color-lemon-100)" />
                    <stop offset="55%" stopColor="var(--color-lemon-400)" />
                    <stop offset="100%" stopColor="var(--color-lemon-600)" />
                </radialGradient>
            </defs>
            <path d="M10 52C10 34 32 18 60 18s50 16 50 34-22 30-50 30S10 70 10 52Z" fill="url(#lemon-gradient)" />
            <path d="M4 50q-4-4 1-8 5 1 8 8Z M116 50q4-4-1-8-5 1-8 8Z" fill="var(--color-lemon-500)" />
            <path d="M64 19C68 4 84 0 98 8 92 21 78 25 64 19Z" className="fill-lagoon-500" />
            <path
                d="M30 40c6-8 16-12 26-12"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                className="stroke-white/70"
            />
        </svg>
    );
}
