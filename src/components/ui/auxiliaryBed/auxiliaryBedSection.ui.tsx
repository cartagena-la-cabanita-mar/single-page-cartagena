import { Play } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import DreamVoyageUI from "@/components/ui/auxiliaryBed/dreamVoyage.ui";
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

/**
 * The wipe is applied to an inner layer: an element that is completely clipped is never seen as visible by the
 * browser, so clipping the observed card itself left it blank on phones.
 */
const WIPE_VARIANTS: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    shown: { clipPath: "inset(0 0% 0 0)" },
};

export default function AuxiliaryBedSectionUI() {
    const { t } = useTranslation("auxiliaryBed");

    return (
        <SectionShellUI id={SectionId.AuxiliaryBed}>
            <SectionHeaderUI id={SectionId.AuxiliaryBed} lead={t("text")} />

            <div className="mb-16">
                <DreamVoyageUI />
            </div>

            <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
                {BED_STEPS.map(({ slug, labelKey }, index) => (
                    <motion.li
                        key={slug}
                        className="relative"
                        initial="hidden"
                        whileInView="shown"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <motion.div
                            variants={WIPE_VARIANTS}
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
                        </motion.div>
                        {index === 0 && (
                            <div className="absolute top-[58%] left-4">
                                <HandNoteUI>{t("pull")}</HandNoteUI>
                            </div>
                        )}
                    </motion.li>
                ))}
            </ol>

            <div className="mt-14 flex flex-col items-start gap-6">
                <a
                    href={AUXILIARY_BED_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full max-w-xl overflow-hidden rounded-4xl border-4 border-white shadow-xl shadow-sea-900/20"
                >
                    <PhotoUI
                        slug="bed-frame"
                        sizes="(min-width: 768px) 36rem, 90vw"
                        className="aspect-16/9 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-sea-950/70 via-sea-950/10 to-transparent"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                        <span className="relative grid size-20 place-items-center rounded-full bg-lemon-400 text-sea-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <span
                                aria-hidden="true"
                                className="animate-ring absolute inset-0 rounded-full border-4 border-lemon-400"
                            />
                            <Play className="size-9 translate-x-0.5 fill-current" aria-hidden="true" />
                        </span>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 p-5 font-display text-2xl font-semibold text-white">
                        {t("video")}
                    </span>
                </a>

                <LinkPillUI href={AUXILIARY_BED_VIDEO_URL} variant="sun" Icon={Play} className="px-6 py-3 text-base">
                    {t("video")}
                </LinkPillUI>
            </div>
        </SectionShellUI>
    );
}
