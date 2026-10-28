import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import DoorPlateUI from "@/components/ui/navigation/doorPlate.ui";
import LemonTextureUI from "@/components/ui/navigation/lemonTexture.ui";
import LanguageSwitcherUI from "@/components/ui/navigation/languageSwitcher.ui";
import NavListUI from "@/components/ui/navigation/navList.ui";
import TideFillUI from "@/components/ui/navigation/tideFill.ui";
import type { SectionId } from "@/enums/navigation.enum";

interface SideBarUIProps {
    activeSection: SectionId;
}

export default function SideBarUI({ activeSection }: SideBarUIProps) {
    const { t } = useTranslation("translation");
    const navScrollRef = useRef<HTMLDivElement>(null);

    /** Keeps the section being read visible, since the list is taller than short screens. */
    useEffect(() => {
        const container = navScrollRef.current;
        const active = container?.querySelector("[aria-current]");
        if (!container || !active) {
            return;
        }

        const containerBox = container.getBoundingClientRect();
        const activeBox = active.getBoundingClientRect();
        if (activeBox.top < containerBox.top || activeBox.bottom > containerBox.bottom) {
            const centering = (containerBox.height - activeBox.height) / 2;
            container.scrollBy({ top: activeBox.top - containerBox.top - centering, behavior: "smooth" });
        }
    }, [activeSection]);

    return (
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-76 flex-col overflow-hidden bg-sea-700 text-white lg:flex">
            <LemonTextureUI />
            <TideFillUI />

            <div className="relative flex min-h-0 flex-1 flex-col">
                <header className="flex flex-col gap-4 border-b border-white/15 px-6 pt-5 pb-4">
                    <div className="flex items-center gap-4">
                        <DoorPlateUI />
                        <div>
                            <p className="font-display text-lg leading-tight font-semibold">{t("brand.resort")}</p>
                            <p className="text-sm text-white/70">{t("brand.manual")}</p>
                        </div>
                    </div>
                    <LanguageSwitcherUI pillId="language-pill-desktop" />
                </header>

                <div className="relative min-h-0 flex-1">
                    <div
                        ref={navScrollRef}
                        data-lenis-prevent
                        className="scrollbar-sea h-full overflow-y-auto px-4 pt-4 pb-10"
                    >
                        <NavListUI activeSection={activeSection} pillId="nav-pill-desktop" />
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-sea-700 to-transparent"
                    />
                </div>
            </div>
        </aside>
    );
}
