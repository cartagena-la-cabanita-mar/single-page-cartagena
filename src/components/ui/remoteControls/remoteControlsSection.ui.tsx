import { useTranslation } from "react-i18next";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import FanDemoUI from "@/components/ui/remoteControls/fanDemo.ui";
import RemoteGalleryUI from "@/components/ui/remoteControls/remoteGallery.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function RemoteControlsSectionUI() {
    const { t } = useTranslation("remoteControls");

    return (
        <SectionShellUI id={SectionId.RemoteControls} tone="foam">
            <SectionHeaderUI id={SectionId.RemoteControls} />

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                <div className="space-y-5">
                    <h3 className="text-2xl font-semibold sm:text-3xl">{t("fan.title")}</h3>
                    <p>{t("fan.off")}</p>
                    <p>{t("fan.on")}</p>
                    <HandNoteUI tilt="right">{t("fan.try")}</HandNoteUI>
                </div>
                <FanDemoUI />
            </div>

            <div className="mt-16 lg:mt-20">
                <RemoteGalleryUI />
            </div>
        </SectionShellUI>
    );
}
