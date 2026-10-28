import { Flame, Siren } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import LifebuoyUI from "@/components/ui/emergency/lifebuoy.ui";
import SignTileUI from "@/components/ui/emergency/signTile.ui";
import TitanBubbleUI from "@/components/ui/emergency/titanBubble.ui";
import { FIRE_NUMBER, POLICE_NUMBER } from "@/constants/emergency.constant";
import { SectionId } from "@/enums/navigation.enum";

export default function EmergencySectionUI() {
    const { t } = useTranslation("emergency");

    return (
        <SectionShellUI id={SectionId.Emergency} tone="sun">
            <LifebuoyUI />

            <div className="relative">
                <SectionHeaderUI id={SectionId.Emergency} />

                <div className="grid gap-8 sm:grid-cols-2">
                    <SignTileUI label={t("police")} number={POLICE_NUMBER} Icon={Siren} />
                    <SignTileUI label={t("fire")} number={FIRE_NUMBER} Icon={Flame} />
                </div>
                <div className="mt-20 max-w-3xl">
                    <TitanBubbleUI />
                </div>
            </div>
        </SectionShellUI>
    );
}
