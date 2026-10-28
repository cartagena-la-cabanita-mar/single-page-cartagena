import { QrCode } from "lucide-react";
import { useTranslation } from "react-i18next";
import PoolBlockUI from "@/components/ui/commonAreas/poolBlock.ui";
import WeekStripUI from "@/components/ui/commonAreas/weekStrip.ui";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function CommonAreasSectionUI() {
    const { t } = useTranslation("commonAreas");

    return (
        <SectionShellUI id={SectionId.CommonAreas} tone="foam">
            <SectionHeaderUI id={SectionId.CommonAreas} />

            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
                <div className="flex items-center gap-5">
                    <span className="relative grid size-20 place-items-center rounded-full bg-sea-700 font-display text-4xl font-bold text-white shadow-lg ring-4 ring-lemon-400">
                        <span
                            aria-hidden="true"
                            className="animate-ring absolute inset-0 rounded-full border-4 border-lemon-400"
                        />
                        4
                    </span>
                    <p className="font-display text-3xl font-semibold text-sea-800">{t("floor")}</p>
                </div>
                <WeekStripUI />
            </div>

            <div className="mt-20">
                <PoolBlockUI />
            </div>

            <div className="mt-20 grid gap-12 sm:grid-cols-3">
                <div className="space-y-4">
                    <FramedPhotoUI slug="jacuzzi" shape="circle" sizes="18rem" className="mx-auto w-full max-w-64" />
                    <h3 className="text-2xl font-semibold">{t("jacuzzi.title")}</h3>
                    <p className="flex items-start gap-2">
                        <QrCode className="mt-1 size-5 shrink-0 text-sea-600" aria-hidden="true" />
                        {t("jacuzzi.text")}
                    </p>
                </div>
                <div className="space-y-4">
                    <FramedPhotoUI slug="sauna" shape="circle" sizes="18rem" className="mx-auto w-full max-w-64" />
                    <h3 className="text-2xl font-semibold">{t("sauna")}</h3>
                </div>
                <div className="space-y-4">
                    <FramedPhotoUI
                        slug="turkish-bath"
                        shape="circle"
                        sizes="18rem"
                        className="mx-auto w-full max-w-64"
                    />
                    <h3 className="text-2xl font-semibold">{t("turkish")}</h3>
                </div>
            </div>
        </SectionShellUI>
    );
}
