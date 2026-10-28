import { useTranslation } from "react-i18next";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import BoatUI from "@/components/ui/islands/boat.ui";
import IslandTabsUI from "@/components/ui/islands/islandTabs.ui";
import ReserveKioskUI from "@/components/ui/islands/reserveKiosk.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function IslandDayPassesSectionUI() {
    const { t } = useTranslation("islands");

    return (
        <SectionShellUI id={SectionId.IslandDayPasses} tone="sea">
            <SectionHeaderUI id={SectionId.IslandDayPasses} lead={t("intro")} isOnDark />

            <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] xl:gap-16">
                <p className="max-w-2xl text-lg text-white/90">{t("tours")}</p>

                <div className="max-w-md xl:max-w-none">
                    <ReserveKioskUI />
                    <div className="relative -mt-3 ml-6 sm:ml-10">
                        <HandNoteUI tilt="right" className="max-w-xs">
                            {t("tip")}
                        </HandNoteUI>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-10 lg:mt-20">
                <BoatUI />
            </div>

            <IslandTabsUI />
        </SectionShellUI>
    );
}
