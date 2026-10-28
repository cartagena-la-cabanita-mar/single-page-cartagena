import { Footprints, Globe, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import type { Eatery } from "@/interfaces/gastronomy.interface";
import { cn } from "@/utils/common.util";
import { buildMapsSearchUrl } from "@/utils/links.util";

interface MenuRowUIProps {
    eatery: Eatery;
    isOnDark?: boolean;
}

const CITY = "Cartagena";

const ACTION_CLASSES = "size-10 justify-center p-0";

const NAME_CLASSES = {
    light: "bg-linear-to-r from-lemon-300 to-lemon-300 bg-size-[0%_0.5em] bg-left-bottom bg-no-repeat box-decoration-clone transition-[background-size] duration-500 ease-swell group-hover:bg-size-[100%_0.5em] group-focus-within:bg-size-[100%_0.5em]",
    dark: "transition-colors duration-300 group-hover:text-lemon-300 group-focus-within:text-lemon-300",
};

const LEADER_CLASSES = {
    light: "border-sea-300 group-hover:border-lemon-500 group-focus-within:border-lemon-500",
    dark: "border-white/35 group-hover:border-lemon-400 group-focus-within:border-lemon-400",
};

/** One line of the menu: name, a dotted leader that turns lemon on hover, the address and two quick links. */
export default function MenuRowUI({ eatery, isOnDark = false }: MenuRowUIProps) {
    const { t } = useTranslation(["gastronomy", "common"]);
    const { name, address, url, note, isWalkable = false } = eatery;
    const tone = isOnDark ? "dark" : "light";

    return (
        <li className="group">
            <div className="flex items-center gap-3">
                <p
                    className={cn(
                        "min-w-0 font-display text-xl font-semibold sm:text-2xl",
                        isOnDark ? "text-white" : "text-sea-900",
                    )}
                >
                    <span className={NAME_CLASSES[tone]}>{name}</span>
                </p>
                <span
                    aria-hidden="true"
                    className={cn(
                        "mb-2.5 h-0 min-w-3 flex-1 self-end border-b-2 border-dotted transition-[border-color,translate] duration-300 group-hover:-translate-y-0.5",
                        LEADER_CLASSES[tone],
                    )}
                />
                <div className="flex shrink-0 gap-2">
                    <LinkPillUI
                        href={url}
                        Icon={Globe}
                        variant={isOnDark ? "sun" : "soft"}
                        className={cn(ACTION_CLASSES, !isOnDark && "focus-visible:outline-sea-600")}
                    >
                        <span className="sr-only">{`${t("common:website")}: ${name}`}</span>
                    </LinkPillUI>
                    <LinkPillUI
                        href={buildMapsSearchUrl(`${name} ${address} ${CITY}`)}
                        Icon={MapPin}
                        variant={isOnDark ? "sun" : "soft"}
                        className={cn(ACTION_CLASSES, !isOnDark && "focus-visible:outline-sea-600")}
                    >
                        <span className="sr-only">{`${t("common:openMap")}: ${name}`}</span>
                    </LinkPillUI>
                </div>
            </div>

            {note && (
                <p className={cn("font-display text-lg italic", isOnDark ? "text-lemon-300" : "text-sea-600")}>
                    {t(`notes.${note}`)}
                </p>
            )}
            <p className={cn("text-sm", isOnDark ? "text-white/70" : "text-ink/70")}>{address}</p>

            {isWalkable && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lemon-300 px-3 py-1 text-sm font-semibold text-sea-950">
                    <Footprints className="size-4 shrink-0" aria-hidden="true" />
                    {t("walkFromHere")}
                </p>
            )}
        </li>
    );
}
