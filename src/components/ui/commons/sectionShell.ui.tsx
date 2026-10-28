import type { ReactNode } from "react";
import WaveEdgeUI from "@/components/ui/commons/waveEdge.ui";
import type { SectionId } from "@/enums/navigation.enum";
import type { SectionTone } from "@/types/ui.type";
import { cn } from "@/utils/common.util";

interface SectionShellUIProps {
    id: SectionId;
    tone?: SectionTone;
    hasWave?: boolean;
    className?: string;
    children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, { surface: string; wave: string }> = {
    white: { surface: "bg-white text-ink", wave: "text-white" },
    foam: { surface: "bg-sea-50 pattern-azulejo text-ink", wave: "text-sea-50" },
    sea: { surface: "bg-sea-700 pattern-azulejo-light text-white", wave: "text-sea-700" },
    sun: { surface: "bg-lemon-300 text-sea-950", wave: "text-lemon-300" },
};

export default function SectionShellUI({
    id,
    tone = "white",
    hasWave = true,
    className,
    children,
}: SectionShellUIProps) {
    const { surface, wave } = TONE_CLASSES[tone];

    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className={cn("relative scroll-mt-14 lg:scroll-mt-0", surface)}
        >
            {hasWave && <WaveEdgeUI className={wave} />}
            <div className={cn("mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32", className)}>{children}</div>
        </section>
    );
}
