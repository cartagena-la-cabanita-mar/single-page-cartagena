import { useId } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

interface InventorySearchUIProps {
    query: string;
    count: number;
    onQueryChange: (query: string) => void;
}

/** The search field and, beside it, a live tally of how many objects match what has been typed. */
export default function InventorySearchUI({ query, count, onQueryChange }: InventorySearchUIProps) {
    const { t } = useTranslation("inventory");
    const inputId = useId();

    return (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="w-full sm:max-w-xl">
                <label htmlFor={inputId} className="mb-2 block font-hand text-3xl leading-none text-sea-600">
                    {t("searchLabel")}
                </label>
                <div className="relative">
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-lemon-300 text-sea-900"
                    >
                        <Search className="size-5" />
                    </span>
                    <input
                        id={inputId}
                        type="search"
                        value={query}
                        onChange={(event) => onQueryChange(event.target.value)}
                        placeholder={t("searchPlaceholder")}
                        autoComplete="off"
                        spellCheck={false}
                        className="h-14 w-full rounded-full border-2 border-sea-200 bg-sea-50 pr-5 pl-14 text-lg text-ink transition-colors placeholder:text-sea-700/60 focus:border-sea-500"
                    />
                </div>
            </div>

            <p role="status" className="flex items-baseline gap-2 text-sea-700">
                <span className="font-display text-5xl leading-none font-bold">{count}</span>{" "}
                <span className="text-lg font-semibold">{t("total")}</span>
            </p>
        </div>
    );
}
