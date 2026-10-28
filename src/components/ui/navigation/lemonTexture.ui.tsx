import type { CSSProperties } from "react";
import { lemonBg } from "@/assets/lemonPattern";
import { cn } from "@/utils/common.util";

interface LemonTextureUIProps {
    className?: string;
}

const LEMON_MASK_STYLE: CSSProperties = {
    maskImage: lemonBg.backgroundImage,
    maskRepeat: lemonBg.backgroundRepeat,
    maskSize: lemonBg.backgroundSize,
    WebkitMaskImage: lemonBg.backgroundImage,
    WebkitMaskRepeat: lemonBg.backgroundRepeat,
    WebkitMaskSize: lemonBg.backgroundSize,
};

/** The lemon pattern of the guide as tone-on-tone silhouettes, tinted with a light sea blue. */
export default function LemonTextureUI({ className }: LemonTextureUIProps) {
    return (
        <div aria-hidden="true" className={cn("absolute inset-0 bg-sea-300/15", className)} style={LEMON_MASK_STYLE} />
    );
}
