import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/common.util";

interface ShareCardUIProps {
    Icon: LucideIcon;
    title: string;
    text: string;
    children: ReactNode;
    aside?: ReactNode;
    className?: string;
}

/** A white card with an icon, a short message and its actions, with an optional picture on the side. */
export default function ShareCardUI({ Icon, title, text, children, aside, className }: ShareCardUIProps) {
    return (
        <article
            className={cn(
                "overflow-hidden rounded-4xl bg-white p-7 text-sea-900 shadow-xl shadow-sea-950/30",
                aside && "grid items-center gap-8 sm:grid-cols-[1fr_auto]",
                className,
            )}
        >
            <div>
                <span className="grid size-12 place-items-center rounded-full bg-lemon-400 text-sea-950">
                    <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-lg text-ink/85">{text}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div>
            </div>
            {aside && <div className="w-full sm:w-52">{aside}</div>}
        </article>
    );
}
