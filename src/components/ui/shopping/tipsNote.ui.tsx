import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

type TipKey = "cash" | "street" | "belongings" | "emeralds";

const TIPS: Array<TipKey> = ["cash", "street", "belongings", "emeralds"];

/** A lemon sticky note taped to the market, with the four things to remember before buying. */
export default function TipsNoteUI() {
    const { t } = useTranslation("shopping");

    return (
        <div className="relative mx-auto mt-20 max-w-3xl -rotate-1 rounded-xs bg-lemon-300 px-7 pt-12 pb-10 text-sea-950 shadow-xl shadow-sea-950/20 sm:px-12 sm:pt-14">
            <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-2 bg-white/60 shadow-sm"
            />
            <h3 className="font-hand text-4xl font-bold text-sea-950 sm:text-5xl">{t("tips.title")}</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
                {TIPS.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 font-medium">
                        <Check className="mt-0.5 size-6 shrink-0 text-sea-700" strokeWidth={3} aria-hidden="true" />
                        {t(`tips.${tip}`)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
