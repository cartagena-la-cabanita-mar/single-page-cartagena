import type { ReactNode } from "react";
import { cn } from "@/utils/common.util";

interface ChatBubbleUIProps {
    isOutgoing?: boolean;
    children: ReactNode;
}

/** A WhatsApp-style message bubble: white when the answer comes from the city, blue when the host writes. */
export default function ChatBubbleUI({ isOutgoing = false, children }: ChatBubbleUIProps) {
    return (
        <div
            className={cn(
                "relative rounded-4xl p-7 shadow-xl shadow-sea-950/20 sm:p-9",
                isOutgoing ? "mr-4 rounded-tr-none bg-sea-700 text-white" : "ml-4 rounded-tl-none bg-white text-ink",
            )}
        >
            <span
                aria-hidden="true"
                className={cn(
                    "absolute top-0 h-5 w-4",
                    isOutgoing
                        ? "-right-4 bg-sea-700 [clip-path:polygon(0_0,100%_0,0_100%)]"
                        : "-left-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]",
                )}
            />
            {children}
        </div>
    );
}
