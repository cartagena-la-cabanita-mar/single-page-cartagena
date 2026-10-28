import { Phone } from "lucide-react";
import type { PhoneContact } from "@/interfaces/common.interface";
import { buildTelUrl } from "@/utils/links.util";

interface PhoneChipUIProps {
    phone: PhoneContact;
}

export default function PhoneChipUI({ phone }: PhoneChipUIProps) {
    return (
        <a
            href={buildTelUrl(phone.tel)}
            className="inline-flex min-h-10 max-w-full items-center gap-2 rounded-3xl bg-white/10 px-4 py-2 text-sm leading-snug font-semibold text-white transition-colors hover:bg-white/20"
        >
            <Phone className="size-4 shrink-0 text-lemon-400" aria-hidden="true" />
            {phone.label}
        </a>
    );
}
