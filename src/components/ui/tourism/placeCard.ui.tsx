import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import PhotoUI from "@/components/ui/commons/photo.ui";
import type { PlaceId } from "@/enums/tourism.enum";
import type { Place } from "@/interfaces/tourism.interface";

interface PlaceCardUIProps {
    place: Place;
    onSelect: (id: PlaceId) => void;
}

/** A postcard of a place: the photo sits in an arch and travels into the dialog when the card is opened. */
export default function PlaceCardUI({ place, onSelect }: PlaceCardUIProps) {
    const { t } = useTranslation(["tourism", "common"]);

    return (
        <li className="w-72 shrink-0 snap-start sm:w-80">
            <button
                type="button"
                onClick={() => onSelect(place.id)}
                className="group flex w-full flex-col gap-4 text-left"
            >
                <motion.div
                    layoutId={`place-photo-${place.id}`}
                    className="aspect-3/4 overflow-hidden rounded-t-full rounded-b-3xl border-4 border-white bg-sea-100 shadow-xl shadow-sea-900/15"
                >
                    <PhotoUI
                        slug={place.photo}
                        sizes="20rem"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </motion.div>
                <div className="px-1">
                    <h3 className="text-2xl font-semibold text-sea-900 transition-colors group-hover:text-sea-600">
                        {t(`tourism:places.${place.id}.title`)}
                    </h3>
                    <p className="mt-2 text-ink/75">{t(`tourism:places.${place.id}.teaser`)}</p>
                    <p className="mt-3 inline-block border-b-2 border-lemon-400 font-semibold text-sea-700">
                        {t("common:details")}
                    </p>
                </div>
            </button>
        </li>
    );
}
