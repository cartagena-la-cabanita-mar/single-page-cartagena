import { ShoppingBasket } from "lucide-react";
import { useTranslation } from "react-i18next";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import { SUPERMARKETS } from "@/constants/neighborhood.constant";

/** Supermarkets and cash machines, the two errands guests ask about first. */
export default function ConveniencesUI() {
    const { t } = useTranslation("neighborhood");

    return (
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
                <h3 className="text-3xl font-semibold">{t("supermarkets.title")}</h3>
                <p className="mt-4">{t("supermarkets.text")}</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                    {SUPERMARKETS.map((name) => (
                        <li
                            key={name}
                            className="flex items-center gap-2 rounded-full bg-lemon-100 px-4 py-2 font-bold text-sea-900"
                        >
                            <ShoppingBasket className="size-4 text-lemon-600" aria-hidden="true" />
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-3xl font-semibold">{t("atms.title")}</h3>
                <p className="mt-4">{t("atms.text")}</p>
                <FramedPhotoUI slug="atms" sizes="(min-width: 1024px) 32rem, 90vw" className="mt-6 aspect-16/7" />
            </div>
        </div>
    );
}
