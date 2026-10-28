import { Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/utils/common.util";
import { buildTelUrl } from "@/utils/links.util";

interface SignTileUIProps {
    label: string;
    number: string;
    Icon: LucideIcon;
}

const RIVET_POSITIONS = ["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"];

/** An enamel street sign, riveted at the corners: the number is the biggest thing on the page and the whole plate is one tap. */
export default function SignTileUI({ label, number, Icon }: SignTileUIProps) {
    const { t } = useTranslation("common");

    return (
        <a
            href={buildTelUrl(number)}
            className="group block rounded-4xl border-8 border-sea-600 bg-white p-1.5 text-center shadow-xl shadow-sea-950/25 transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline-sea-700 active:translate-y-0"
        >
            <span className="relative flex flex-col items-center gap-1 rounded-3xl border-2 border-sea-600 px-4 pt-8 pb-7 sm:px-6">
                {RIVET_POSITIONS.map((position) => (
                    <span
                        key={position}
                        aria-hidden="true"
                        className={cn("absolute size-2.5 rounded-full bg-sea-300", position)}
                    />
                ))}
                <span className="flex items-center gap-2.5 font-display text-2xl font-semibold text-sea-700 italic sm:text-3xl">
                    <Icon className="size-7 shrink-0" aria-hidden="true" />
                    {label}
                </span>
                <span className="font-display text-8xl leading-none font-bold text-sea-900 font-soft xl:text-9xl">
                    {number}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-lemon-400 px-5 py-2.5 font-bold text-sea-950 transition-colors group-hover:bg-sea-600 group-hover:text-white">
                    <Phone className="size-5" aria-hidden="true" />
                    {t("call")}
                </span>
            </span>
        </a>
    );
}
