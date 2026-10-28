import type { ReactNode } from "react";
import { cn } from "@/utils/common.util";

interface HandNoteUIProps {
    children: ReactNode;
    tone?: "lemon" | "white";
    tilt?: "left" | "right";
    className?: string;
}

/** A handwritten sticker, like the labels the host drew on the photos of the original guide. */
export default function HandNoteUI({ children, tone = "lemon", tilt = "left", className }: HandNoteUIProps) {
    return (
        <span
            className={cn(
                "inline-block rounded-md px-3 py-1 font-hand text-2xl leading-tight shadow-md shadow-sea-950/15",
                tone === "lemon" ? "bg-lemon-300 text-sea-950" : "bg-white text-sea-800",
                tilt === "left" ? "-rotate-2" : "rotate-2",
                className,
            )}
        >
            {children}
        </span>
    );
}
