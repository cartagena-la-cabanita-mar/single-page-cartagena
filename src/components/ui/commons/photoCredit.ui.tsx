import { Camera } from "lucide-react";
import { getPhotoMeta } from "@/utils/photos.util";
import type { PhotoSlug } from "@/types/photos.type";
import { cn } from "@/utils/common.util";

interface PhotoCreditUIProps {
    slug: PhotoSlug;
    className?: string;
}

/** Author and licence of a photo that needs attribution; renders nothing for the host's own photos. */
export default function PhotoCreditUI({ slug, className }: PhotoCreditUIProps) {
    const { credit } = getPhotoMeta(slug);

    if (!credit) {
        return null;
    }

    return (
        <p className={cn("flex items-center gap-2 text-xs text-ink/60", className)}>
            <Camera className="size-3.5 shrink-0" aria-hidden="true" />
            <a
                href={credit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
            >
                {credit.author}
            </a>
            <a
                href={credit.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
            >
                {credit.license}
            </a>
        </p>
    );
}
