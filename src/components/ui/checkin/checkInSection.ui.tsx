import { useTranslation } from "react-i18next";
import WristbandUI from "@/components/ui/checkin/wristband.ui";
import SmartLockUI from "@/components/ui/checkin/smartLock.ui";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import StepUI from "@/components/ui/commons/step.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function CheckInSectionUI() {
    const { t } = useTranslation("checkin");

    return (
        <SectionShellUI id={SectionId.CheckIn} tone="foam">
            <SectionHeaderUI id={SectionId.CheckIn} />

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                <StepUI number="1" title={t("lobby.title")}>
                    <p>{t("lobby.p1")}</p>
                    <FramedPhotoUI slug="lobby" sizes="(min-width: 1024px) 30rem, 90vw" className="aspect-16/9" />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                        <WristbandUI />
                        <div className="space-y-2">
                            <p>{t("lobby.p2")}</p>
                            <p className="font-semibold text-sea-700">{t("lobby.p3")}</p>
                        </div>
                    </div>
                </StepUI>

                <StepUI number="2" title={t("door.title")}>
                    <p>{t("door.text")}</p>
                    <div className="pt-4 pb-6">
                        <SmartLockUI />
                    </div>
                </StepUI>
            </div>
        </SectionShellUI>
    );
}
