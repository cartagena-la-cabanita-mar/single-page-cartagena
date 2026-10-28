import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, MapPin, Sailboat, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import PhotoCreditUI from "@/components/ui/commons/photoCredit.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import type { Place } from "@/interfaces/tourism.interface";
import useGoToSection from "@/hooks/useGoToSection.hook";
import { buildMapsSearchUrl } from "@/utils/links.util";

interface PlaceDialogUIProps {
    place: Place | undefined;
    onClose: () => void;
    onStep: (direction: 1 | -1) => void;
}

export default function PlaceDialogUI({ place, onClose, onStep }: PlaceDialogUIProps) {
    const { t } = useTranslation(["tourism", "common"]);
    const goToSection = useGoToSection();

    function handleRelatedSection() {
        if (place?.relatedSection) {
            onClose();
            goToSection(place.relatedSection);
        }
    }

    return (
        <Dialog open={place !== undefined} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <AnimatePresence>
                {place && (
                    <DialogPortal forceMount>
                        <DialogOverlay asChild forceMount>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            />
                        </DialogOverlay>
                        <DialogContent
                            asChild
                            forceMount
                            aria-describedby={undefined}
                            className="top-1/2 left-1/2 max-h-[92svh] w-[min(60rem,94vw)] -translate-x-1/2 -translate-y-1/2"
                        >
                            <motion.div
                                data-lenis-prevent
                                className="overflow-y-auto rounded-4xl bg-white shadow-2xl"
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                                    <div className="p-5 md:p-8">
                                        <motion.div
                                            layoutId={`place-photo-${place.id}`}
                                            className="mx-auto aspect-3/4 max-w-xs overflow-hidden rounded-t-full rounded-b-3xl border-4 border-white bg-sea-100 shadow-xl"
                                        >
                                            <PhotoUI
                                                slug={place.photo}
                                                sizes="24rem"
                                                className="size-full object-cover"
                                            />
                                        </motion.div>
                                        <PhotoCreditUI slug={place.photo} className="mt-4 justify-center" />
                                    </div>

                                    <div className="flex flex-col gap-5 p-6 md:p-10 md:pl-2">
                                        <DialogTitle className="font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
                                            {t(`tourism:places.${place.id}.title`)}
                                        </DialogTitle>
                                        <div className="space-y-4 text-lg">
                                            {t(`tourism:places.${place.id}.text`)
                                                .split("\n\n")
                                                .map((paragraph) => (
                                                    <p key={paragraph}>{paragraph}</p>
                                                ))}
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <LinkPillUI
                                                href={buildMapsSearchUrl(place.mapsQuery)}
                                                Icon={MapPin}
                                                variant="solid"
                                            >
                                                {t("common:openMap")}
                                            </LinkPillUI>
                                            {place.relatedSection && (
                                                <button
                                                    type="button"
                                                    onClick={handleRelatedSection}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-lemon-400 px-3.5 py-1.5 text-sm font-semibold text-sea-950 transition-colors hover:bg-lemon-300"
                                                >
                                                    <Sailboat className="size-4" aria-hidden="true" />
                                                    {t("tourism:seeIslands")}
                                                </button>
                                            )}
                                        </div>
                                        <div className="mt-auto flex items-center justify-between pt-4">
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => onStep(-1)}
                                                    aria-label={t("common:previous")}
                                                    className="grid size-11 place-items-center rounded-full bg-sea-100 text-sea-800 transition-colors hover:bg-sea-200"
                                                >
                                                    <ChevronLeft className="size-5" aria-hidden="true" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => onStep(1)}
                                                    aria-label={t("common:next")}
                                                    className="grid size-11 place-items-center rounded-full bg-sea-100 text-sea-800 transition-colors hover:bg-sea-200"
                                                >
                                                    <ChevronRight className="size-5" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <DialogClose
                                                aria-label={t("common:close")}
                                                className="grid size-11 place-items-center rounded-full bg-sea-700 text-white transition-colors hover:bg-sea-800"
                                            >
                                                <X className="size-5" aria-hidden="true" />
                                            </DialogClose>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogContent>
                    </DialogPortal>
                )}
            </AnimatePresence>
        </Dialog>
    );
}
