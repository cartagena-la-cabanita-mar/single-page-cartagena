import { Ban, Luggage } from "lucide-react";
import { useTranslation } from "react-i18next";

/** The building's luggage storage service, laid out as the paper tag you would tie to a suitcase. */
export default function LuggageTagUI() {
    const { t } = useTranslation("checkout");

    return (
        <div className="relative rounded-4xl bg-white p-7 pt-12 text-sea-900 shadow-xl shadow-sea-950/30">
            <span
                aria-hidden="true"
                className="absolute top-4 left-1/2 size-5 -translate-x-1/2 rounded-full bg-sea-700 ring-4 ring-sea-200"
            />
            <div className="flex items-center gap-3">
                <Luggage className="size-8 text-sea-600" aria-hidden="true" />
                <h3 className="text-2xl font-semibold">{t("luggage.title")}</h3>
            </div>
            <p className="mt-4">{t("luggage.p1")}</p>
            <p className="mt-3">{t("luggage.p2")}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-error-soft px-4 py-2 font-semibold text-error">
                <Ban className="size-4" aria-hidden="true" />
                {t("luggage.noCash")}
            </p>
        </div>
    );
}
