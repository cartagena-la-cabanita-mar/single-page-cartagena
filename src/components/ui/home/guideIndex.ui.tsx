import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { NAV_GROUPS, SECTION_ICONS } from "@/constants/navigation.constant";
import type { SectionId } from "@/enums/navigation.enum";
import useGoToSection from "@/hooks/useGoToSection.hook";

/** The index of the printed guide, with a dotted leader and a tap-to-jump link for every section. */
export default function GuideIndexUI() {
    const { t } = useTranslation(["translation", "navigation"]);
    const goToSection = useGoToSection();

    function handleClick(event: MouseEvent<HTMLAnchorElement>, id: SectionId) {
        event.preventDefault();
        goToSection(id);
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold">{t("translation:welcome.indexTitle")}</h3>
            <p className="mt-2 text-ink/70">{t("translation:welcome.indexText")}</p>

            <div className="mt-8 flex flex-col gap-8">
                {NAV_GROUPS.map((group) => (
                    <div key={group.id}>
                        <p className="mb-2 font-display text-lg text-sea-600 italic">
                            {t(`navigation:groups.${group.id}`)}
                        </p>
                        <ul>
                            {group.sections.map((id) => {
                                const Icon = SECTION_ICONS[id];

                                return (
                                    <li key={id}>
                                        <a
                                            href={`#${id}`}
                                            onClick={(event) => handleClick(event, id)}
                                            className="group flex items-center gap-3 py-2 text-ink/90 transition-colors hover:text-sea-600"
                                        >
                                            <span>{t(`navigation:items.${id}`)}</span>
                                            <span
                                                aria-hidden="true"
                                                className="h-px flex-1 border-b-2 border-dotted border-sea-300 group-hover:border-lemon-500"
                                            />
                                            <Icon className="size-4 shrink-0 text-sea-500" aria-hidden="true" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
