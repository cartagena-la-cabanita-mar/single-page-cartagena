import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import VideoCardUI from "@/components/ui/videoGuides/videoCard.ui";
import { VIDEO_GUIDES } from "@/constants/videoGuides.constant";
import { SectionId } from "@/enums/navigation.enum";

export default function VideoGuidesSectionUI() {
    const { t } = useTranslation("videoGuides");
    const listRef = useRef<HTMLUListElement>(null);

    /** Only one video plays at a time, so sounds never overlap. */
    function pauseOthers(playing: HTMLVideoElement) {
        listRef.current?.querySelectorAll("video").forEach((video) => {
            if (video !== playing) {
                video.pause();
            }
        });
    }

    return (
        <SectionShellUI id={SectionId.VideoGuides}>
            <SectionHeaderUI id={SectionId.VideoGuides} lead={t("lead")} />

            <ul ref={listRef} className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4 lg:gap-x-8">
                {VIDEO_GUIDES.map((guide, index) => (
                    <VideoCardUI
                        key={guide.id}
                        guide={guide}
                        onPlay={pauseOthers}
                        className={index % 2 === 1 ? "lg:mt-12" : undefined}
                    />
                ))}
            </ul>
        </SectionShellUI>
    );
}
