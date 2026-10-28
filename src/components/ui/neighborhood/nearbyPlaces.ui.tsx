import { MapPin, Phone, Wheat } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import { NEARBY_BAKERY, NEARBY_RESTAURANTS } from "@/constants/neighborhood.constant";
import type { NearbyPlace } from "@/interfaces/neighborhood.interface";
import { buildMapsSearchUrl, buildTelUrl } from "@/utils/links.util";

interface NearbyCardUIProps {
    place: NearbyPlace;
    description?: string;
    isBakery?: boolean;
}

function NearbyCardUI({ place, description, isBakery = false }: NearbyCardUIProps) {
    const { t } = useTranslation(["neighborhood", "common"]);

    return (
        <li className="flex flex-col gap-3 rounded-3xl border-2 border-sea-100 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-2xl font-semibold text-sea-900">{place.name}</h4>
                {isBakery && <Wheat className="size-6 shrink-0 text-lemon-600" aria-hidden="true" />}
            </div>
            {description && <p className="text-ink/80">{description}</p>}
            <p className="text-sm text-ink/70">{place.address}</p>
            <div className="mt-auto flex flex-wrap gap-2">
                <LinkPillUI href={buildMapsSearchUrl(`${place.name} ${place.address} Cartagena`)} Icon={MapPin}>
                    {t("common:openMap")}
                </LinkPillUI>
                {place.delivery && (
                    <LinkPillUI href={buildTelUrl(place.delivery.tel)} Icon={Phone} variant="sun" isExternal={false}>
                        {t("neighborhood:restaurants.delivery")} {place.delivery.label}
                    </LinkPillUI>
                )}
            </div>
        </li>
    );
}

export default function NearbyPlacesUI() {
    const { t } = useTranslation("neighborhood");

    return (
        <div>
            <h3 className="mb-6 text-3xl font-semibold">{t("restaurants.title")}</h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {NEARBY_RESTAURANTS.map((place) => (
                    <NearbyCardUI
                        key={place.name}
                        place={place}
                        description={place.note ? t(`restaurants.${place.note}`) : undefined}
                    />
                ))}
                <NearbyCardUI place={NEARBY_BAKERY} description={t("bakery")} isBakery />
            </ul>
            <p className="mt-6 text-ink/80">{t("more")}</p>
        </div>
    );
}
