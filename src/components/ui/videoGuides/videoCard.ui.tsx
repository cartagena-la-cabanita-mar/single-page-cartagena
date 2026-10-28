import { useTranslation } from "react-i18next";
import type { VideoGuide } from "@/interfaces/videoGuides.interface";
import { cn } from "@/utils/common.util";

interface VideoCardUIProps {
    guide: VideoGuide;
    className?: string;
    onPlay: (video: HTMLVideoElement) => void;
}

/** A phone-shaped player: the recordings were filmed vertically on a phone, so they keep that shape. */
export default function VideoCardUI({ guide, className, onPlay }: VideoCardUIProps) {
    const { t } = useTranslation("videoGuides");
    const title = t(`videos.${guide.id}`);

    return (
        <li className={cn("flex flex-col items-center gap-5", className)}>
            <div className="relative w-full max-w-60 rounded-[2.4rem] border-8 border-sea-950 bg-sea-950 shadow-xl shadow-sea-900/25">
                <span
                    aria-hidden="true"
                    className="absolute top-2 left-1/2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-sea-800"
                />
                <video
                    src={guide.src}
                    aria-label={title}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={(event) => onPlay(event.currentTarget)}
                    className="aspect-478/850 w-full rounded-[1.7rem] bg-sea-950 object-cover"
                />
            </div>
            <h3 className="max-w-60 text-center text-xl font-semibold text-sea-900">{title}</h3>
        </li>
    );
}
