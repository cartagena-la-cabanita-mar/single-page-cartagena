import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import PhotoUI from "@/components/ui/commons/photo.ui";
import type { PhotoSlug } from "@/types/photos.type";
import type { FrameShape } from "@/types/ui.type";
import { cn } from "@/utils/common.util";

interface FramedPhotoUIProps {
    slug: PhotoSlug;
    shape?: FrameShape;
    sizes?: string;
    isParallax?: boolean;
    isEager?: boolean;
    className?: string;
    children?: ReactNode;
}

const SHAPE_CLASSES: Record<FrameShape, string> = {
    arch: "rounded-t-full rounded-b-3xl",
    rounded: "rounded-3xl",
    circle: "aspect-square rounded-full",
};

/** A photo inside a whitewashed frame. The caller sets its size; the image drifts slowly while scrolling. */
export default function FramedPhotoUI({
    slug,
    shape = "rounded",
    sizes,
    isParallax = false,
    isEager = false,
    className,
    children,
}: FramedPhotoUIProps) {
    const frameRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

    return (
        <div
            ref={frameRef}
            className={cn(
                "relative overflow-hidden border-4 border-white bg-sea-100 shadow-xl shadow-sea-900/15",
                SHAPE_CLASSES[shape],
                className,
            )}
        >
            <motion.div className="size-full" style={isParallax ? { y: imageY, scale: 1.16 } : undefined}>
                <PhotoUI slug={slug} sizes={sizes} isEager={isEager} className="size-full object-cover" />
            </motion.div>
            {children}
        </div>
    );
}
