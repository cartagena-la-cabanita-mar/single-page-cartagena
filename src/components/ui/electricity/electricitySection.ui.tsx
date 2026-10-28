import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import StepUI from "@/components/ui/commons/step.ui";
import EnergySwitchUI from "@/components/ui/electricity/energySwitch.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function ElectricitySectionUI() {
    const { t } = useTranslation("electricity");

    return (
        <SectionShellUI id={SectionId.Electricity}>
            <SectionHeaderUI id={SectionId.Electricity} lead={t("onEntry")} />

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                <StepUI number="1" title={t("step1.title")}>
                    <p>{t("step1.text")}</p>
                    <FramedPhotoUI
                        slug="breaker-panel"
                        shape="arch"
                        sizes="16rem"
                        className="mx-auto aspect-3/4 w-full max-w-64"
                    />
                </StepUI>

                <StepUI number="2" title={t("step2.title")}>
                    <p>{t("step2.text")}</p>
                    <FramedPhotoUI
                        slug="energy-saver"
                        sizes="(min-width: 1024px) 28rem, 90vw"
                        className="aspect-4/3 w-full max-w-md"
                    />
                    <HandNoteUI className="max-w-sm">{t("step2.warning")}</HandNoteUI>
                    <div className="pt-2">
                        <EnergySwitchUI />
                    </div>
                </StepUI>
            </div>
        </SectionShellUI>
    );
}
