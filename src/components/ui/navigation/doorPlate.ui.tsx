import { cn } from "@/utils/common.util";

interface DoorPlateUIProps {
    size?: "sm" | "lg";
    className?: string;
}

const SIZE_CLASSES: Record<NonNullable<DoorPlateUIProps["size"]>, string> = {
    sm: "size-12 rounded-lg border-2 text-lg",
    lg: "size-24 rounded-2xl border-4 text-4xl sm:size-28 sm:text-5xl",
};

/** The 1317 house number, painted on a ceramic tile like the ones next to Mediterranean doors. */
export default function DoorPlateUI({ size = "sm", className }: DoorPlateUIProps) {
    return (
        <span
            className={cn(
                "relative grid shrink-0 place-items-center border-sea-600 bg-white font-display font-bold text-sea-700 shadow-md shadow-sea-950/25 ring-2 ring-white ring-offset-2 ring-offset-lemon-400",
                SIZE_CLASSES[size],
                className,
            )}
        >
            <span aria-hidden="true" className="absolute inset-1 rounded-[inherit] border border-sea-300" />
            <span className="relative">1317</span>
        </span>
    );
}
