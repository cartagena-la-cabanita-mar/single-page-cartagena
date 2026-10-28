import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import DoorPlateUI from "@/components/ui/navigation/doorPlate.ui";
import LemonTextureUI from "@/components/ui/navigation/lemonTexture.ui";
import LanguageSwitcherUI from "@/components/ui/navigation/languageSwitcher.ui";
import NavListUI from "@/components/ui/navigation/navList.ui";
import { MOBILE_HEADER_HEIGHT_PX } from "@/constants/navigation.constant";
import type { SectionId } from "@/enums/navigation.enum";

interface MobileNavUIProps {
    activeSection: SectionId;
}

/** Top bar with a reading progress line, plus a drawer with the same sections as the desktop sidebar. */
export default function MobileNavUI({ activeSection }: MobileNavUIProps) {
    const { t } = useTranslation(["translation", "navigation"]);
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

    function closeDrawer() {
        setIsOpen(false);
        lenis?.start();
    }

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        lenis?.stop();

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
                lenis?.start();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            lenis?.start();
        };
    }, [isOpen, lenis]);

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-sea-700 px-4 text-white shadow-md shadow-sea-950/20 lg:hidden"
                style={{ height: MOBILE_HEADER_HEIGHT_PX }}
            >
                <div className="flex items-center gap-3">
                    <DoorPlateUI />
                    <p className="font-display text-base leading-tight font-semibold">
                        {t("translation:brand.resort")}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label={t("navigation:open")}
                    aria-expanded={isOpen}
                    className="grid size-10 place-items-center rounded-full bg-white/10"
                >
                    <Menu className="size-5" aria-hidden="true" />
                </button>
                <motion.div
                    aria-hidden="true"
                    style={{ scaleX: progress }}
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-lemon-400"
                />
            </header>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <motion.div
                            className="absolute inset-0 bg-sea-950/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDrawer}
                        />
                        <motion.aside
                            role="dialog"
                            aria-modal="true"
                            aria-label={t("navigation:label")}
                            className="absolute inset-y-0 left-0 flex w-[86vw] max-w-xs flex-col overflow-hidden bg-sea-700 text-white"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 36 }}
                        >
                            <LemonTextureUI />
                            <div className="relative flex min-h-0 flex-1 flex-col">
                                <div className="flex items-center justify-between gap-3 border-b border-white/15 px-5 py-4">
                                    <LanguageSwitcherUI pillId="language-pill-drawer" className="w-40" />
                                    <button
                                        type="button"
                                        onClick={closeDrawer}
                                        aria-label={t("navigation:close")}
                                        className="grid size-10 place-items-center rounded-full bg-white/10"
                                    >
                                        <X className="size-5" aria-hidden="true" />
                                    </button>
                                </div>
                                <div data-lenis-prevent className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
                                    <NavListUI
                                        activeSection={activeSection}
                                        pillId="nav-pill-drawer"
                                        onNavigate={closeDrawer}
                                    />
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
