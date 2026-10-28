import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { NAV_GROUPS, SECTION_ICONS } from "@/constants/navigation.constant";
import type { SectionId } from "@/enums/navigation.enum";
import useGoToSection from "@/hooks/useGoToSection.hook";
import { cn } from "@/utils/common.util";

interface NavListUIProps {
    activeSection: SectionId;
    pillId: string;
    onNavigate?: () => void;
}

export default function NavListUI({ activeSection, pillId, onNavigate }: NavListUIProps) {
    const { t } = useTranslation("navigation");
    const goToSection = useGoToSection();

    function handleClick(event: MouseEvent<HTMLAnchorElement>, id: SectionId) {
        event.preventDefault();
        onNavigate?.();
        goToSection(id);
    }

    return (
        <nav aria-label={t("label")} className="flex flex-col gap-4">
            {NAV_GROUPS.map((group) => (
                <div key={group.id}>
                    <p className="mb-1 px-3 font-display text-base italic text-lemon-300">{t(`groups.${group.id}`)}</p>
                    <ul className="flex flex-col gap-0.5">
                        {group.sections.map((id) => {
                            const Icon = SECTION_ICONS[id];
                            const isActive = id === activeSection;

                            return (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={(event) => handleClick(event, id)}
                                        aria-current={isActive ? "location" : undefined}
                                        className={cn(
                                            "relative flex items-center gap-3 rounded-xl px-3 py-1.5 text-sm transition-colors",
                                            isActive ? "font-semibold text-sea-950" : "text-white/80 hover:text-white",
                                        )}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId={pillId}
                                                className="absolute inset-0 rounded-xl bg-lemon-400"
                                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                            />
                                        )}
                                        <Icon
                                            className="relative size-4 shrink-0"
                                            strokeWidth={1.9}
                                            aria-hidden="true"
                                        />
                                        <span className="relative">{t(`items.${id}`)}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    );
}
