import { Camera, House } from "lucide-react";
import { useTranslation } from "react-i18next";
import PlaneToHeartUI from "@/components/ui/comeBack/planeToHeart.ui";
import PlaneToQrUI from "@/components/ui/comeBack/planeToQr.ui";
import ShareCardUI from "@/components/ui/comeBack/shareCard.ui";
import CopyButtonUI from "@/components/ui/commons/copyButton.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import { AIRBNB_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/constants/socials.constant";
import { SectionId } from "@/enums/navigation.enum";

export default function ComeBackSectionUI() {
    const { t } = useTranslation("comeBack");

    return (
        <SectionShellUI id={SectionId.ComeBack} tone="sea">
            <SectionHeaderUI id={SectionId.ComeBack} isOnDark />

            <div className="flex flex-col gap-10">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <ShareCardUI Icon={House} title={t("airbnb.title")} text={t("airbnb.text")}>
                        <LinkPillUI href={AIRBNB_URL} variant="solid" className="px-5 py-2.5 text-base">
                            {t("airbnb.button")}
                        </LinkPillUI>
                        <CopyButtonUI value={AIRBNB_URL} isOnDark={false} />
                    </ShareCardUI>
                    <div className="order-first flex justify-center lg:order-none">
                        <PlaneToHeartUI />
                    </div>
                </div>

                <ShareCardUI
                    Icon={Camera}
                    title={t("instagram.title")}
                    text={t("instagram.text")}
                    aside={<PlaneToQrUI />}
                >
                    <LinkPillUI href={INSTAGRAM_URL} variant="sun" className="px-5 py-2.5 text-base">
                        {t("instagram.button")}
                    </LinkPillUI>
                    <span className="font-display text-xl font-semibold text-sea-700">{INSTAGRAM_HANDLE}</span>
                </ShareCardUI>
            </div>
        </SectionShellUI>
    );
}
