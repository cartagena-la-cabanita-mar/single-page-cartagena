import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/common.util";

interface LinkPillUIProps {
    href: string;
    children: ReactNode;
    Icon?: LucideIcon;
    variant?: "solid" | "soft" | "sun";
    isExternal?: boolean;
    className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<LinkPillUIProps["variant"]>, string> = {
    solid: "bg-sea-600 text-white hover:bg-sea-700",
    soft: "bg-sea-100 text-sea-800 hover:bg-sea-200",
    sun: "bg-lemon-400 text-sea-950 hover:bg-lemon-300",
};

export default function LinkPillUI({
    href,
    children,
    Icon,
    variant = "soft",
    isExternal = true,
    className,
}: LinkPillUIProps) {
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
                VARIANT_CLASSES[variant],
                className,
            )}
        >
            {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
            {children}
        </a>
    );
}
