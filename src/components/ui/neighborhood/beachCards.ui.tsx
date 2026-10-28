import { Bike, Ban, Waves } from "lucide-react";
import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import { cn } from "@/utils/common.util";

interface BadgeUIProps {
    label: string;
    isAllowed: boolean;
}

/** A beach flag: yellow-red warning when swimming is not allowed, blue when it is. */
function BeachFlagUI({ label, isAllowed }: BadgeUIProps) {
    const Icon = isAllowed ? Waves : Ban;

    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 rounded-r-full rounded-l-sm border-l-8 py-2 pr-5 pl-3 font-bold",
                isAllowed ? "border-sea-700 bg-sea-100 text-sea-800" : "border-error bg-lemon-300 text-sea-950",
            )}
        >
            <Icon className="size-5" aria-hidden="true" />
            {label}
        </span>
    );
}

export default function BeachCardsUI() {
    const { t } = useTranslation("neighborhood");

    return (
        <div>
            <h3 className="mb-8 text-3xl font-semibold">{t("beaches.title")}</h3>
            <div className="grid gap-10 md:grid-cols-2">
                <article className="space-y-4">
                    <FramedPhotoUI
                        slug="crespo-view"
                        isParallax
                        sizes="(min-width: 768px) 36rem, 90vw"
                        className="aspect-16/10"
                    />
                    <BeachFlagUI label={t("beaches.crespo.badge")} isAllowed={false} />
                    <h4 className="text-2xl font-semibold">{t("beaches.crespo.title")}</h4>
                    <p>{t("beaches.crespo.text")}</p>
                    <p className="font-semibold text-sea-800">{t("beaches.crespo.swim")}</p>
                    <p className="flex items-start gap-2">
                        <Bike className="mt-1 size-5 shrink-0 text-lagoon-500" aria-hidden="true" />
                        {t("beaches.crespo.park")}
                    </p>
                </article>

                <article className="space-y-4">
                    <FramedPhotoUI
                        slug="marbella-sign"
                        isParallax
                        sizes="(min-width: 768px) 36rem, 90vw"
                        className="aspect-16/10"
                    />
                    <BeachFlagUI label={t("beaches.marbella.badge")} isAllowed />
                    <h4 className="text-2xl font-semibold">{t("beaches.marbella.title")}</h4>
                    <p>{t("beaches.marbella.text")}</p>
                    <p className="font-semibold text-sea-800">{t("beaches.marbella.walk")}</p>
                </article>
            </div>
        </div>
    );
}
