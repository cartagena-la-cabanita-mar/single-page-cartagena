import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import LemonUI from "@/components/ui/commons/lemon.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";
import WaveEdgeUI from "@/components/ui/commons/waveEdge.ui";
import PhotoCreditsUI from "@/components/ui/home/photoCredits.ui";
import { SectionId } from "@/enums/navigation.enum";
import useGoToSection from "@/hooks/useGoToSection.hook";

export default function FooterUI() {
    const { t } = useTranslation(["translation", "common"]);
    const goToSection = useGoToSection();

    return (
        <footer className="relative isolate overflow-hidden bg-sea-950 text-white">
            <WaveEdgeUI className="text-sea-950" />
            <PhotoUI slug="sunset-wall" sizes="100vw" className="absolute inset-0 -z-20 size-full object-cover" />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-sea-950 via-sea-950/75 to-sea-950/30"
            />
            <LemonUI className="animate-bob absolute top-[18%] right-[8%] -z-10 hidden w-24 rotate-12 sm:block" />
            <LemonUI className="animate-bob-slow absolute top-[42%] left-[6%] -z-10 hidden w-14 -rotate-12 sm:block" />

            <div className="mx-auto max-w-6xl px-5 pt-40 pb-16 sm:px-8 lg:px-12 lg:pt-56">
                <p className="max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-bold">
                    {t("translation:footer.enjoy")}
                </p>
                <button
                    type="button"
                    onClick={() => goToSection(SectionId.Welcome)}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-lemon-400 px-6 py-3 font-bold text-sea-950 transition-colors hover:bg-lemon-300"
                >
                    <ArrowUp className="size-5" aria-hidden="true" />
                    {t("common:backToTop")}
                </button>
                <PhotoCreditsUI />
            </div>
        </footer>
    );
}
