import { Waves, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MAINTENANCE_WEEKDAY_INDEX } from "@/constants/apartment.constant";
import { Language } from "@/enums/language.enum";
import { getWeekdayLabels } from "@/utils/format.util";
import { cn } from "@/utils/common.util";

/** The week at a glance: every day is a pool day except Tuesday, when the common areas are in maintenance. */
export default function WeekStripUI() {
    const { t, i18n } = useTranslation("commonAreas");
    const weekdays = getWeekdayLabels(i18n.resolvedLanguage ?? Language.Spanish);

    return (
        <div>
            <ul className="grid grid-cols-7 gap-2">
                {weekdays.map((weekday, index) => {
                    const isMaintenanceDay = index === MAINTENANCE_WEEKDAY_INDEX;

                    return (
                        <li
                            key={weekday}
                            className={cn(
                                "flex flex-col items-center gap-2 rounded-2xl px-1 py-3 text-center",
                                isMaintenanceDay
                                    ? "bg-error-soft text-error ring-2 ring-error"
                                    : "bg-white text-sea-800",
                            )}
                        >
                            <span className="text-sm font-bold">{weekday}</span>
                            {isMaintenanceDay ? (
                                <Wrench className="size-5" aria-hidden="true" />
                            ) : (
                                <Waves className="size-5 text-lagoon-500" aria-hidden="true" />
                            )}
                            {isMaintenanceDay && <span className="sr-only">{t("maintenance")}</span>}
                        </li>
                    );
                })}
            </ul>
            <p className="mt-4 font-semibold text-error">{t("closed")}</p>
        </div>
    );
}
