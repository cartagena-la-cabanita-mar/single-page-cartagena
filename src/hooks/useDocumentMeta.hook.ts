import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "@/enums/language.enum";
import { setMeta } from "@/utils/metadata.util";

/**
 * Updates the document language, `<title>` and key `<meta>` tags from the `metadata` i18n namespace.
 * Re-runs whenever the active language changes.
 */
export default function useDocumentMeta() {
    const { t, i18n } = useTranslation("metadata");

    useEffect(() => {
        const title = t("title");
        const description = t("description");
        const siteName = t("siteName");

        document.documentElement.lang = i18n.resolvedLanguage ?? Language.Spanish;
        document.title = title;

        setMeta("name", "description", description);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:site_name", siteName);
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
    }, [i18n.resolvedLanguage, t]);
}
