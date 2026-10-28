import PhotoUI from "@/components/ui/commons/photo.ui";
import WaveEdgeUI from "@/components/ui/commons/waveEdge.ui";
import MenuCategoryUI from "@/components/ui/gastronomy/menuCategory.ui";
import { EateryCategory } from "@/enums/gastronomy.enum";

/** The evening part of the menu: the tide of the board turns deep blue and the skyline glows behind the bars. */
export default function BarsPanelUI() {
    return (
        <div className="relative isolate bg-sea-800 pattern-azulejo-light text-white">
            <WaveEdgeUI className="text-sea-800" />
            <PhotoUI
                slug="rooftop-night"
                sizes="(min-width: 1024px) 40rem, 100vw"
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full object-cover object-bottom opacity-40 mix-blend-luminosity"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-b from-sea-800 from-10% via-sea-800/75 to-sea-900/95"
            />
            <div className="px-5 pt-4 pb-12 sm:px-10 sm:pb-14">
                <MenuCategoryUI category={EateryCategory.Bars} isOnDark />
            </div>
        </div>
    );
}
