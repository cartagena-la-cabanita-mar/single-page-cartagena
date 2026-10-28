import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import CraftsListUI from "@/components/ui/shopping/craftsList.ui";
import StallUI from "@/components/ui/shopping/stall.ui";
import TipsNoteUI from "@/components/ui/shopping/tipsNote.ui";
import { SectionId } from "@/enums/navigation.enum";

type CraftKey = "bovedas" | "sanDiego" | "serrezuela" | "walk" | "getsemaniMall";

const HISTORIC_CRAFTS: Array<CraftKey> = ["bovedas", "sanDiego", "serrezuela", "walk"];
const GETSEMANI_CRAFTS: Array<CraftKey> = ["getsemaniMall", "walk"];

export default function ShoppingSectionUI() {
    const { t } = useTranslation("shopping");

    return (
        <SectionShellUI id={SectionId.Shopping} tone="foam">
            <div className="grid items-center gap-x-14 xl:grid-cols-[1.15fr_0.85fr]">
                <SectionHeaderUI id={SectionId.Shopping} lead={t("lead")} />
                <div className="mb-14 xl:mb-16">
                    <FramedPhotoUI
                        slug="shopping"
                        sizes="(min-width: 1280px) 24rem, 90vw"
                        className="mx-auto aspect-4/3 max-w-md rotate-2 xl:max-w-none"
                    />
                </div>
            </div>

            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr]">
                <StallUI title={t("serrezuela.title")} className="xl:col-start-2 xl:row-start-1">
                    <p>{t("serrezuela.text")}</p>
                </StallUI>

                <StallUI
                    title={t("crafts.title")}
                    stripes={10}
                    className="md:order-first md:col-span-2 xl:order-none xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1"
                >
                    <p>{t("crafts.text")}</p>
                    <CraftsListUI
                        title={t("crafts.historicTitle")}
                        items={HISTORIC_CRAFTS.map((craft) => t(`crafts.${craft}`))}
                    />
                    <CraftsListUI
                        title={t("crafts.getsemaniTitle")}
                        items={GETSEMANI_CRAFTS.map((craft) => t(`crafts.${craft}`))}
                        className="border-t-2 border-dashed border-sea-200 pt-6"
                    />
                </StallUI>

                <StallUI title={t("malls.title")} className="xl:col-start-2 xl:row-start-2">
                    <p>{t("malls.text")}</p>
                </StallUI>
            </div>

            <TipsNoteUI />
        </SectionShellUI>
    );
}
