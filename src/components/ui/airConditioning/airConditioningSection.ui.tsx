import { useTranslation } from "react-i18next";
import AcWindowUI from "@/components/ui/airConditioning/acWindow.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function AirConditioningSectionUI() {
    const { t } = useTranslation("airConditioning");

    return (
        <SectionShellUI id={SectionId.AirConditioning} tone="foam">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <div>
                    <SectionHeaderUI id={SectionId.AirConditioning} />
                    <p className="max-w-xl font-display text-3xl leading-snug font-medium text-sea-800 sm:text-4xl">
                        {t("text")}
                    </p>
                </div>
                <AcWindowUI />
            </div>
        </SectionShellUI>
    );
}
