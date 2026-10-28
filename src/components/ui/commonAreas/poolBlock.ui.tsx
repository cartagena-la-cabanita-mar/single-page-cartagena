import { useTranslation } from "react-i18next";
import PoolHoursUI from "@/components/ui/commonAreas/poolHours.ui";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";

export default function PoolBlockUI() {
    const { t } = useTranslation("commonAreas");

    return (
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div className="space-y-5">
                <h3 className="text-3xl font-semibold">{t("pool.title")}</h3>
                <p>{t("pool.hours")}</p>
                <p>{t("pool.bags")}</p>
                <PoolHoursUI />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <FramedPhotoUI
                    slug="pool-view"
                    isParallax
                    sizes="(min-width: 1024px) 20rem, 45vw"
                    className="aspect-4/3"
                />
                <FramedPhotoUI
                    slug="pool-tall"
                    shape="arch"
                    sizes="(min-width: 1024px) 20rem, 45vw"
                    className="row-span-2 aspect-3/5"
                />
                <FramedPhotoUI slug="pool-long" sizes="(min-width: 1024px) 20rem, 45vw" className="aspect-4/3" />
                <FramedPhotoUI slug="pool-hours" sizes="(min-width: 1024px) 20rem, 45vw" className="aspect-4/3" />
                <FramedPhotoUI slug="pool-rules" sizes="(min-width: 1024px) 20rem, 45vw" className="aspect-4/3" />
            </div>
        </div>
    );
}
