import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Language } from "@/enums/language.enum";
import { cn } from "@/utils/common.util";

interface LanguageSwitcherUIProps {
    pillId: string;
    className?: string;
}

export default function LanguageSwitcherUI({ pillId, className }: LanguageSwitcherUIProps) {
    const { t, i18n } = useTranslation("translation");

    return (
        <div
            role="group"
            aria-label={t("language.label")}
            className={cn("relative flex rounded-full bg-sea-950/35 p-1", className)}
        >
            {Object.values(Language).map((language) => {
                const isActive = i18n.resolvedLanguage === language;

                return (
                    <button
                        key={language}
                        type="button"
                        lang={language}
                        aria-pressed={isActive}
                        aria-label={t(`language.${language}`)}
                        onClick={() => void i18n.changeLanguage(language)}
                        className={cn(
                            "relative flex-1 rounded-full px-3 py-1 text-sm font-bold uppercase transition-colors",
                            isActive ? "text-sea-950" : "text-white/80 hover:text-white",
                        )}
                    >
                        {isActive && (
                            <motion.span
                                layoutId={pillId}
                                className="absolute inset-0 rounded-full bg-white"
                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                            />
                        )}
                        <span className="relative">{language}</span>
                    </button>
                );
            })}
        </div>
    );
}
