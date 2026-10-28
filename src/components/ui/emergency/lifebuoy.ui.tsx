import { LifeBuoy } from "lucide-react";

/** A giant lifebuoy drifting off the corner of the section; its own clipping layer keeps it from adding scroll width. */
export default function LifebuoyUI() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <LifeBuoy
                strokeWidth={0.7}
                className="animate-spin-slow absolute -top-24 -right-44 size-[36rem] text-sea-600 opacity-25 xl:-right-28 xl:size-[44rem] xl:opacity-100"
            />
        </div>
    );
}
