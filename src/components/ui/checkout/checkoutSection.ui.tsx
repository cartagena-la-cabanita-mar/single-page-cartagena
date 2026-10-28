import { KeyRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import CheckoutChecklistUI from "@/components/ui/checkout/checkoutChecklist.ui";
import CheckoutClockUI from "@/components/ui/checkout/checkoutClock.ui";
import LuggageTagUI from "@/components/ui/checkout/luggageTag.ui";
import WristbandCutUI from "@/components/ui/checkout/wristbandCut.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function CheckoutSectionUI() {
    const { t } = useTranslation("checkout");

    return (
        <SectionShellUI id={SectionId.CheckOut} tone="sea">
            <SectionHeaderUI id={SectionId.CheckOut} isOnDark />

            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-8">
                    <CheckoutClockUI />
                    <div className="text-center">
                        <p className="text-lg text-white/80">{t("timeLabel")}</p>
                        <p className="font-display text-6xl font-bold text-lemon-400">{t("time")}</p>
                    </div>
                    <p className="text-lg text-white/90">{t("cleaning")}</p>
                    <p className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                        <KeyRound className="mt-0.5 size-5 shrink-0 text-lemon-400" aria-hidden="true" />
                        {t("codeExpires")}
                    </p>
                    <div className="flex items-center gap-6">
                        <WristbandCutUI />
                        <p className="text-white/85">{t("wristband")}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <CheckoutChecklistUI />
                    <LuggageTagUI />
                </div>
            </div>
        </SectionShellUI>
    );
}
