import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import { AUXILIARY_BED_VIDEO_URL } from "@/constants/apartment.constant";
import { SectionId } from "@/enums/navigation.enum";
import type { PhotoSlug } from "@/types/photos.type";

interface BedStep {
    slug: PhotoSlug;
    labelKey: "step1" | "step2" | "step3";
}

const BED_STEPS: Array<BedStep> = [
    { slug: "bed-closed", labelKey: "step1" },
    { slug: "bed-pulled", labelKey: "step2" },
    { slug: "bed-made", labelKey: "step3" },
];

const STEP_REVEAL_DELAY_SECONDS = 0.35;

export default function AuxiliaryBedSectionUI() {
    const { t } = useTranslation("auxiliaryBed");

    return (
        <SectionShellUI id={SectionId.AuxiliaryBed}>
            <SectionHeaderUI id={SectionId.AuxiliaryBed} lead={t("text")} />

            <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
                {BED_STEPS.map(({ slug, labelKey }, index) => (
                    <motion.li
                        key={slug}
                        className="relative"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            delay: index * STEP_REVEAL_DELAY_SECONDS,
                            duration: 0.9,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                    >
                        <FramedPhotoUI slug={slug} sizes="(min-width: 768px) 24rem, 90vw" className="aspect-4/3" />
                        <p className="mt-4 flex items-center gap-3 text-lg font-semibold text-sea-800">
                            <span className="grid size-8 place-items-center rounded-full bg-lemon-400 text-sm font-bold text-sea-950">
                                {index + 1}
                            </span>
                            {t(labelKey)}
                        </p>
                        {index === 0 && (
                            <div className="absolute top-[58%] left-4">
                                <HandNoteUI>{t("pull")}</HandNoteUI>
                            </div>
                        )}
                    </motion.li>
                ))}
            </ol>

            <div className="mt-12">
                <LinkPillUI href={AUXILIARY_BED_VIDEO_URL} variant="sun" Icon={Play} className="px-6 py-3 text-base">
                    {t("video")}
                </LinkPillUI>
            </div>
        </SectionShellUI>
    );
}
