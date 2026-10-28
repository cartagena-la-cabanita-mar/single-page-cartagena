import { useTranslation } from "react-i18next";
import MenuRowUI from "@/components/ui/gastronomy/menuRow.ui";
import { EATERIES } from "@/constants/gastronomy.constant";
import { EateryCategory, EateryZone } from "@/enums/gastronomy.enum";
import type { Eatery } from "@/interfaces/gastronomy.interface";
import { cn } from "@/utils/common.util";

interface MenuCategoryUIProps {
    category: EateryCategory;
    isOnDark?: boolean;
}

interface ZoneGroup {
    zone: EateryZone;
    eateries: Array<Eatery>;
}

/** Zones always appear from the historic centre outwards, whatever the order of the data. */
function groupByZone(eateries: Array<Eatery>): Array<ZoneGroup> {
    return Object.values(EateryZone)
        .map((zone) => ({ zone, eateries: eateries.filter((eatery) => eatery.zone === zone) }))
        .filter((group) => group.eateries.length > 0);
}

const ZONE_GROUPS: Record<EateryCategory, Array<ZoneGroup>> = {
    [EateryCategory.Restaurants]: groupByZone(EATERIES[EateryCategory.Restaurants]),
    [EateryCategory.Brunch]: groupByZone(EATERIES[EateryCategory.Brunch]),
    [EateryCategory.Bars]: groupByZone(EATERIES[EateryCategory.Bars]),
};

/** A page of the menu: an italic title, then the venues grouped by the zone of the city. */
export default function MenuCategoryUI({ category, isOnDark = false }: MenuCategoryUIProps) {
    const { t } = useTranslation("gastronomy");

    return (
        <div>
            <h3
                className={cn(
                    "font-display text-4xl font-semibold italic underline decoration-2 decoration-wavy underline-offset-8 sm:text-5xl",
                    isOnDark ? "text-white decoration-lemon-400" : "text-sea-900 decoration-sea-300",
                )}
            >
                {t(`${category}`)}
            </h3>

            <div className="mt-9 flex flex-col gap-10">
                {ZONE_GROUPS[category].map(({ zone, eateries }) => (
                    <div key={zone}>
                        <h4
                            className={cn(
                                "flex items-center gap-3 font-hand text-3xl leading-none",
                                isOnDark ? "text-sea-200" : "text-sea-600",
                            )}
                        >
                            <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-lemon-400" />
                            {t(`zones.${zone}`)}
                        </h4>
                        <ul className="mt-6 flex flex-col gap-7">
                            {eateries.map((eatery) => (
                                <MenuRowUI key={eatery.name} eatery={eatery} isOnDark={isOnDark} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
