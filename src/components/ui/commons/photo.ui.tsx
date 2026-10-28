import type { ImgHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import type { PhotoSlug } from "@/types/photos.type";
import { getPhotoSource } from "@/utils/photos.util";

interface PhotoUIProps extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "srcSet" | "alt" | "width" | "height"
> {
    slug: PhotoSlug;
    sizes?: string;
    isEager?: boolean;
}

export default function PhotoUI({ slug, sizes = "100vw", isEager = false, ...imageProps }: PhotoUIProps) {
    const { t } = useTranslation("photos");
    const { src, srcSet, width, height } = getPhotoSource(slug);

    return (
        <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            alt={t(slug)}
            loading={isEager ? "eager" : "lazy"}
            decoding="async"
            {...imageProps}
        />
    );
}
