import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsappUrl } from "@/utils/links.util";

interface WhatsappButtonUIProps {
    phone: string;
    label: string;
}

/** A chat button that shows the number it opens, so it can also be saved by hand. */
export default function WhatsappButtonUI({ phone, label }: WhatsappButtonUIProps) {
    const { t } = useTranslation("common");

    return (
        <a
            href={buildWhatsappUrl(phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-sea-600 py-2 pr-6 pl-2 text-white transition-colors hover:bg-sea-700 focus-visible:outline-sea-600"
        >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lemon-400 text-sea-950">
                <MessageCircle className="size-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col text-left leading-tight">
                <span className="text-sm font-semibold opacity-85">{t("whatsapp")}</span>
                <span className="font-display text-xl font-bold">{label}</span>
            </span>
        </a>
    );
}
