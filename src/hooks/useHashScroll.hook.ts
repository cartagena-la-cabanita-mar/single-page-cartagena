import { useEffect } from "react";
import { SECTION_IDS } from "@/constants/navigation.constant";
import useGoToSection from "@/hooks/useGoToSection.hook";

/**
 * Moments, after the page opens, when the section of the URL hash is aligned again: the second one catches the layout
 * shift that web fonts and images cause after the first jump.
 */
const HASH_SCROLL_DELAYS_MILLISECONDS = [400, 1500];
const USER_SCROLL_EVENTS = ["wheel", "touchstart", "pointerdown", "keydown"];

/** Opens the guide at the section named in the URL hash (e.g. `/#wifi`) until the reader starts scrolling. */
export default function useHashScroll() {
    const goToSection = useGoToSection();

    useEffect(() => {
        const requested = window.location.hash.slice(1);
        const section = SECTION_IDS.find((id) => id === requested);
        if (!section) {
            return;
        }

        const timeouts = HASH_SCROLL_DELAYS_MILLISECONDS.map((delay) =>
            window.setTimeout(() => goToSection(section, true), delay),
        );

        function stopAligning() {
            timeouts.forEach((timeout) => window.clearTimeout(timeout));
        }

        USER_SCROLL_EVENTS.forEach((type) => window.addEventListener(type, stopAligning, { passive: true }));

        return () => {
            stopAligning();
            USER_SCROLL_EVENTS.forEach((type) => window.removeEventListener(type, stopAligning));
        };
    }, [goToSection]);
}
