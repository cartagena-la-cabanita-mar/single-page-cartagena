import { Footprints, House } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { WALK_STOPS } from "@/constants/neighborhood.constant";
import { Language } from "@/enums/language.enum";
import type { WalkStop } from "@/interfaces/neighborhood.interface";
import { formatMinutes } from "@/utils/format.util";

type WalkStopLabel = WalkStop["labels"][number];

const LABEL_KEYS: Record<
    WalkStopLabel,
    "atms.title" | "restaurants.title" | "supermarkets.title" | "beaches.marbella.title"
> = {
    atms: "atms.title",
    restaurants: "restaurants.title",
    supermarkets: "supermarkets.title",
    marbella: "beaches.marbella.title",
};

/** A walk from the building along Calle 70: the farther the stop, the farther along the line. */
export default function WalkPathUI() {
    const { t, i18n } = useTranslation("neighborhood");
    const locale = i18n.resolvedLanguage ?? Language.Spanish;

    return (
        <div>
            <p className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold text-sea-800">
                <Footprints className="size-6 text-lemon-600" aria-hidden="true" />
                {t("walkTitle")}
            </p>

            <div className="relative">
                <motion.div
                    aria-hidden="true"
                    className="absolute top-6 right-6 left-6 hidden h-1.5 origin-left rounded-full bg-lemon-400 md:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <ol className="relative grid gap-8 md:grid-cols-4 md:gap-4">
                    <li className="flex items-center gap-4 md:flex-col md:items-start">
                        <span className="grid size-12 place-items-center rounded-full bg-sea-700 text-white ring-4 ring-white">
                            <House className="size-6" aria-hidden="true" />
                        </span>
                        <p className="font-display text-2xl font-semibold">1317</p>
                    </li>
                    {WALK_STOPS.map(({ minutes, labels }) => (
                        <li key={minutes} className="flex items-start gap-4 md:flex-col">
                            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lemon-400 text-sm font-extrabold text-sea-950 ring-4 ring-white">
                                {formatMinutes(minutes, locale)}
                            </span>
                            <ul className="text-lg font-semibold text-sea-900">
                                {labels.map((label) => (
                                    <li key={label}>{t(LABEL_KEYS[label])}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
