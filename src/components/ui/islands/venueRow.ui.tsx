import { Globe, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import PhoneChipUI from "@/components/ui/islands/phoneChip.ui";
import type { Venue } from "@/interfaces/islands.interface";

interface VenueRowUIProps {
    venue: Venue;
}

/** One day-pass venue, set like a line of a ferry timetable: the name, where it is and how to reach it. */
export default function VenueRowUI({ venue }: VenueRowUIProps) {
    const { t } = useTranslation(["islands", "common"]);
    const { name, url, phones, note } = venue;

    return (
        <li className="border-b-2 border-dashed border-white/20 py-6 first:pt-0 last:border-b-0 last:pb-0">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-6">
                <div className="min-w-0">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{name}</h3>
                    {note && (
                        <p className="mt-1 flex items-center gap-1.5 text-base text-sea-200">
                            <MapPin className="size-4 shrink-0 text-lemon-400" aria-hidden="true" />
                            {t(`islands:notes.${note}`)}
                        </p>
                    )}
                </div>
                <LinkPillUI href={url} variant="sun" Icon={Globe} className="min-h-10 shrink-0">
                    {t("common:website")}
                    <span className="sr-only">{name}</span>
                </LinkPillUI>
            </div>

            {phones.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                    {phones.map((phone) => (
                        <li key={phone.tel} className="max-w-full">
                            <PhoneChipUI phone={phone} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}
