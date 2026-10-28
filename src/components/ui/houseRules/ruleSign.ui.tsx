import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/common.util";

interface RuleSignUIProps {
    Icon: LucideIcon;
    isInvitation: boolean;
}

/** A round house sign: blue for the invitation, crossed out in red for what is not allowed. */
export default function RuleSignUI({ Icon, isInvitation }: RuleSignUIProps) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border-4",
                isInvitation ? "border-sea-600 bg-sea-100 text-sea-700" : "border-error bg-error-soft text-error",
            )}
        >
            <Icon className="size-7" strokeWidth={1.8} />
            {!isInvitation && <span className="absolute h-1 w-[120%] rotate-45 rounded bg-error" />}
        </span>
    );
}
