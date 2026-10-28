import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyButtonUI from "@/components/ui/commons/copyButton.ui";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import GuideIndexUI from "@/components/ui/home/guideIndex.ui";
import { APARTMENT_MAPS_QUERY } from "@/constants/apartment.constant";
import { buildMapsSearchUrl } from "@/utils/links.util";

export default function WelcomeInfoUI() {
    const { t } = useTranslation(["translation", "common"]);

    return (
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-12">
                <div className="rounded-4xl bg-sea-600 p-8 text-white shadow-xl shadow-sea-900/20">
                    <MapPin className="size-8 text-lemon-400" aria-hidden="true" />
                    <h3 className="mt-4 text-3xl font-semibold text-white">{t("translation:welcome.addressTitle")}</h3>
                    <p className="mt-3 text-lg text-white/90">{t("translation:brand.address")}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <LinkPillUI href={buildMapsSearchUrl(APARTMENT_MAPS_QUERY)} variant="sun" Icon={MapPin}>
                            {t("common:openMap")}
                        </LinkPillUI>
                        <CopyButtonUI value={t("translation:brand.address")} />
                    </div>
                </div>

                <div className="grid grid-cols-[1fr_1.2fr_1fr] items-end gap-3 sm:gap-5">
                    <FramedPhotoUI slug="apt-balcony" shape="arch" sizes="20vw" className="aspect-3/5" />
                    <FramedPhotoUI slug="apt-sunset" shape="arch" sizes="24vw" className="aspect-3/6" isParallax />
                    <FramedPhotoUI slug="apt-bed" shape="arch" sizes="20vw" className="aspect-3/5" />
                </div>
            </div>

            <GuideIndexUI />
        </div>
    );
}
