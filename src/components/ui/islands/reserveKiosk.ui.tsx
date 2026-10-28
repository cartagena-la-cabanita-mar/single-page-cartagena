import { Anchor, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import AwningUI from "@/components/ui/commons/awning.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import { buildMapsSearchUrl } from "@/utils/links.util";

const DOCK_MAPS_QUERY = "Muelle de la Bodeguita Cartagena";
const AWNING_STRIPES = 14;

/** Where the tours are booked, as a ticket kiosk on the dock: a striped awning above and the way there below. */
export default function ReserveKioskUI() {
    const { t } = useTranslation(["islands", "common"]);

    return (
        <div className="overflow-hidden rounded-3xl bg-white text-sea-900 shadow-xl shadow-sea-950/30">
            <AwningUI stripes={AWNING_STRIPES} isAnimated={false} />

            <div className="flex flex-col items-start gap-5 px-6 pt-5 pb-6">
                <div className="flex items-start gap-4">
                    <span
                        aria-hidden="true"
                        className="grid size-11 shrink-0 place-items-center rounded-full bg-lemon-300 text-sea-900"
                    >
                        <Anchor className="size-5" />
                    </span>
                    <p className="font-display text-2xl leading-snug font-semibold">{t("islands:reserve")}</p>
                </div>

                <LinkPillUI
                    href={buildMapsSearchUrl(DOCK_MAPS_QUERY)}
                    variant="solid"
                    Icon={MapPin}
                    className="min-h-11 px-5"
                >
                    {t("common:openMap")}
                </LinkPillUI>
            </div>
        </div>
    );
}
