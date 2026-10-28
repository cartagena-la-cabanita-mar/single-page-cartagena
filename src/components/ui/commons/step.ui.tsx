import type { ReactNode } from "react";
import { cn } from "@/utils/common.util";

interface StepUIProps {
    number: string;
    title: string;
    isOnDark?: boolean;
    children: ReactNode;
}

/** One step of a sequence: the content really is ordered, so the number carries information. */
export default function StepUI({ number, title, isOnDark = false, children }: StepUIProps) {
    return (
        <div className="flex gap-3 sm:gap-5">
            <span
                className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-full font-display text-xl sm:size-14 sm:text-2xl font-bold ring-4",
                    isOnDark ? "bg-lemon-400 text-sea-950 ring-white/25" : "bg-sea-600 text-white ring-lemon-300",
                )}
            >
                {number}
            </span>
            <div className="min-w-0 flex-1">
                <h3 className={cn("text-2xl font-semibold sm:text-3xl", isOnDark && "text-white")}>{title}</h3>
                <div className="mt-4 space-y-4">{children}</div>
            </div>
        </div>
    );
}
