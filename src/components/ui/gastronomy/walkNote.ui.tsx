import { Footprints } from "lucide-react";
import { useTranslation } from "react-i18next";
import HandNoteUI from "@/components/ui/commons/handNote.ui";
import { cn } from "@/utils/common.util";

interface WalkNoteUIProps {
    name: string;
    className?: string;
}

/** The host's handwritten tip about the one table you can reach on foot. */
export default function WalkNoteUI({ name, className }: WalkNoteUIProps) {
    const { t } = useTranslation("gastronomy");

    return (
        <HandNoteUI tilt="right" className={cn("flex max-w-68 items-start gap-2.5 px-4 py-2", className)}>
            <Footprints className="mt-1 size-6 shrink-0" aria-hidden="true" />
            <span>
                <strong className="block text-3xl leading-none">{name}</strong>
                {t("walkFromHere")}
            </span>
        </HandNoteUI>
    );
}
