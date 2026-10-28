import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import PlaceCardUI from "@/components/ui/tourism/placeCard.ui";
import PlaceDialogUI from "@/components/ui/tourism/placeDialog.ui";
import { PLACES } from "@/constants/tourism.constant";
import { SectionId } from "@/enums/navigation.enum";
import type { PlaceId } from "@/enums/tourism.enum";

const RAIL_STEP_FRACTION = 0.85;

export default function TourismSectionUI() {
    const { t } = useTranslation(["tourism", "common"]);
    const railRef = useRef<HTMLUListElement>(null);
    const [selectedId, setSelectedId] = useState<PlaceId>();
    const lenis = useLenis();
    const { scrollXProgress } = useScroll({ container: railRef });
    const selectedIndex = PLACES.findIndex(({ id }) => id === selectedId);

    function scrollRail(direction: 1 | -1) {
        const rail = railRef.current;
        if (rail) {
            rail.scrollBy({ left: direction * rail.clientWidth * RAIL_STEP_FRACTION, behavior: "smooth" });
        }
    }

    function stepPlace(direction: 1 | -1) {
        const next = PLACES[(selectedIndex + direction + PLACES.length) % PLACES.length];
        setSelectedId(next.id);
    }

    useEffect(() => {
        if (selectedId === undefined) {
            return;
        }

        lenis?.stop();
        return () => lenis?.start();
    }, [selectedId, lenis]);

    return (
        <SectionShellUI id={SectionId.Tourism} tone="foam">
            <SectionHeaderUI id={SectionId.Tourism} lead={t("tourism:lead")} />

            <ul
                ref={railRef}
                className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-12 lg:scroll-px-12 lg:px-12"
            >
                {PLACES.map((place) => (
                    <PlaceCardUI key={place.id} place={place} onSelect={setSelectedId} />
                ))}
            </ul>

            <div className="mt-6 flex items-center gap-6">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sea-200">
                    <motion.div
                        className="h-full origin-left rounded-full bg-lemon-400"
                        style={{ scaleX: scrollXProgress }}
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => scrollRail(-1)}
                        aria-label={t("common:previous")}
                        className="grid size-11 place-items-center rounded-full bg-sea-700 text-white transition-colors hover:bg-sea-800"
                    >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollRail(1)}
                        aria-label={t("common:next")}
                        className="grid size-11 place-items-center rounded-full bg-sea-700 text-white transition-colors hover:bg-sea-800"
                    >
                        <ChevronRight className="size-5" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <PlaceDialogUI
                place={selectedIndex >= 0 ? PLACES[selectedIndex] : undefined}
                onClose={() => setSelectedId(undefined)}
                onStep={stepPlace}
            />
        </SectionShellUI>
    );
}
