import type { ReactNode } from "react";

interface ChatBubbleUIProps {
    children: ReactNode;
}

/** A WhatsApp-style message bubble, white like an answer that comes from the city. */
export default function ChatBubbleUI({ children }: ChatBubbleUIProps) {
    return (
        <div className="relative ml-4 rounded-4xl rounded-tl-none bg-white p-7 text-ink shadow-xl shadow-sea-950/20 sm:p-9">
            <span
                aria-hidden="true"
                className="absolute top-0 -left-4 h-5 w-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"
            />
            {children}
        </div>
    );
}
