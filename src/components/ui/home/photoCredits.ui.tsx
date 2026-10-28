import { useTranslation } from "react-i18next";
import { getPhotoCredits } from "@/utils/photos.util";

const CREDITS = getPhotoCredits();

/** Every photo that needs attribution, listed with its author and licence. */
export default function PhotoCreditsUI() {
    const { t } = useTranslation("translation");

    return (
        <details className="mt-14 max-w-4xl text-sm text-white/75">
            <summary className="cursor-pointer text-base font-semibold text-white">{t("footer.creditsTitle")}</summary>
            <p className="mt-3 max-w-2xl">{t("footer.creditsText")}</p>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {CREDITS.map(({ title, author, license, licenseUrl, sourceUrl }) => (
                    <li key={sourceUrl}>
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                            {title}
                        </a>{" "}
                        {t("footer.by")} {author},{" "}
                        <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">
                            {license}
                        </a>
                    </li>
                ))}
            </ul>
        </details>
    );
}
