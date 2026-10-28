import type { ReactNode } from "react";
import AwningUI from "@/components/ui/commons/awning.ui";
import { cn } from "@/utils/common.util";

interface StallUIProps {
    title: string;
    stripes?: number;
    className?: string;
    children: ReactNode;
}

/** A market stall: a striped awning, a white counter between two posts and the stall name under the canopy. */
export default function StallUI({ title, stripes = 6, className, children }: StallUIProps) {
    return (
        <article className={cn("flex flex-col", className)}>
            <AwningUI stripes={stripes} isAnimated={false} className="relative z-10 h-10 [&>div]:h-full" />
            <div className="-mt-2 flex flex-1 flex-col gap-5 border-x-4 border-sea-700 bg-white px-6 pt-10 pb-9 sm:px-8">
                <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
                {children}
            </div>
            <div aria-hidden="true" className="h-3 bg-sea-700" />
        </article>
    );
}
