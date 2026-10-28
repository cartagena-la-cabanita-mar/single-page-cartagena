import { PHOTO_MANIFEST } from "@/constants/photos.constant";
import type { PhotoCredit, PhotoMeta, PhotoSource } from "@/interfaces/photos.interface";
import type { PhotoSlug } from "@/types/photos.type";

const PHOTO_URLS = import.meta.glob<string>("/src/assets/images/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
});

const PHOTOS: Record<PhotoSlug, PhotoMeta> = PHOTO_MANIFEST;

export function getPhotoMeta(slug: PhotoSlug): PhotoMeta {
    return PHOTOS[slug];
}

/** Builds the `src` and `srcSet` of a photo from the responsive sizes the image pipeline generated. */
export function getPhotoSource(slug: PhotoSlug): PhotoSource {
    const { sizes, width, height } = PHOTOS[slug];
    const urlFor = (size: number) => PHOTO_URLS[`/src/assets/images/${slug}-${size}.webp`];

    return {
        src: urlFor(Math.max(...sizes)),
        srcSet: sizes.map((size) => `${urlFor(size)} ${size}w`).join(", "),
        width,
        height,
    };
}

/** Credits of every photo that needs attribution, without repeating the same source twice. */
export function getPhotoCredits(): Array<PhotoCredit> {
    const credits = Object.values(PHOTOS).flatMap(({ credit }) => (credit ? [credit] : []));
    return credits.filter(
        (credit, index) => credits.findIndex(({ sourceUrl }) => sourceUrl === credit.sourceUrl) === index,
    );
}
