import { useTranslation } from "react-i18next";
import PhotoUI from "@/components/ui/commons/photo.ui";
import type { PhotoSlug } from "@/types/photos.type";

interface RemoteItem {
    slug: PhotoSlug;
    captionKey: "fan.title" | "tv" | "ac";
}

const REMOTES: Array<RemoteItem> = [
    { slug: "remote-fan", captionKey: "fan.title" },
    { slug: "remote-tv", captionKey: "tv" },
    { slug: "remote-ac", captionKey: "ac" },
];

export default function RemoteGalleryUI() {
    const { t } = useTranslation("remoteControls");

    return (
        <ul className="grid grid-cols-3 gap-4 sm:gap-8">
            {REMOTES.map(({ slug, captionKey }) => (
                <li
                    key={slug}
                    className="flex flex-col items-center gap-4 rounded-3xl bg-white p-4 shadow-lg shadow-sea-900/10"
                >
                    <PhotoUI
                        slug={slug}
                        sizes="(min-width: 640px) 12rem, 30vw"
                        className="h-56 w-auto object-contain sm:h-72"
                    />
                    <p className="text-center text-sm font-semibold text-sea-800 sm:text-base">{t(captionKey)}</p>
                </li>
            ))}
        </ul>
    );
}
