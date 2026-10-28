import { Wifi } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyButtonUI from "@/components/ui/commons/copyButton.ui";
import WifiPasswordUI from "@/components/ui/wifi/wifiPassword.ui";
import { WIFI_NETWORK } from "@/constants/apartment.constant";

interface CredentialProps {
    label: string;
    value: string;
}

const RING_DELAYS_SECONDS = [0, 0.85, 1.7];

function CredentialUI({ label, value }: CredentialProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <div>
                <p className="text-sm font-semibold text-sea-600">{label}</p>
                <p className="font-display text-3xl font-bold break-all text-sea-900 sm:text-4xl">{value}</p>
            </div>
            <CopyButtonUI value={value} isOnDark={false} />
        </div>
    );
}

/** The network and password laid out like a boarding pass, with a perforated stub. */
export default function WifiTicketUI() {
    const { t } = useTranslation("wifi");

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-4xl bg-white text-sea-900 shadow-2xl shadow-sea-950/40 sm:flex-row">
            <div className="relative grid place-items-center bg-lemon-400 px-10 py-10 sm:w-56">
                <div className="relative grid size-24 place-items-center">
                    {RING_DELAYS_SECONDS.map((delay) => (
                        <span
                            key={delay}
                            aria-hidden="true"
                            className="animate-ring absolute inset-0 rounded-full border-4 border-sea-700"
                            style={{ animationDelay: `${delay}s` }}
                        />
                    ))}
                    <Wifi className="relative size-14 text-sea-900" strokeWidth={2.2} aria-hidden="true" />
                </div>

                <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-sea-700 sm:top-1/2 sm:-right-3 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:translate-x-0"
                />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-6 border-t-2 border-dashed border-sea-200 p-8 sm:border-t-0 sm:border-l-2">
                <p className="font-hand text-3xl text-sea-600">{t("join")}</p>
                <CredentialUI label={t("network")} value={WIFI_NETWORK} />
                <WifiPasswordUI />
            </div>
        </div>
    );
}
