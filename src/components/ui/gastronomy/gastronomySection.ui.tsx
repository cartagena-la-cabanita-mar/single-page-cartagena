import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import MenuBoardUI from "@/components/ui/gastronomy/menuBoard.ui";
import WalkNoteUI from "@/components/ui/gastronomy/walkNote.ui";
import { EATERIES } from "@/constants/gastronomy.constant";
import { SectionId } from "@/enums/navigation.enum";

const WALKABLE_EATERY = Object.values(EATERIES)
    .flat()
    .find((eatery) => eatery.isWalkable);

export default function GastronomySectionUI() {
    const { t } = useTranslation("gastronomy");

    return (
        <SectionShellUI id={SectionId.Gastronomy} tone="white">
            <SectionHeaderUI id={SectionId.Gastronomy} lead={t("lead")} />

            <div className="grid gap-16 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-14">
                <div className="xl:sticky xl:top-24 xl:self-start">
                    <div className="relative mx-auto max-w-sm xl:max-w-none">
                        <FramedPhotoUI
                            slug="gastronomy"
                            shape="arch"
                            isParallax
                            sizes="(min-width: 1280px) 20rem, 90vw"
                            className="aspect-square xl:aspect-3/4"
                        />
                        {WALKABLE_EATERY && (
                            <WalkNoteUI name={WALKABLE_EATERY.name} className="absolute -bottom-6 -left-3 sm:-left-6" />
                        )}
                    </div>
                </div>

                <MenuBoardUI />
            </div>
        </SectionShellUI>
    );
}
