import { useCallback } from "react";
import { useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { SECTION_SCROLL_DURATION_SECONDS } from "@/constants/navigation.constant";
import type { SectionId } from "@/enums/navigation.enum";
import { easeInOutCubic } from "@/utils/animation.util";

/** Returns a function that glides to a section of the guide and keeps the URL hash in sync. */
export default function useGoToSection() {
    const lenis = useLenis();
    const shouldReduceMotion = useReducedMotion();

    return useCallback(
        (id: SectionId, isImmediate = false) => {
            // The sections carry scroll-margin-top for the mobile top bar, which Lenis and scrollIntoView both respect.
            const element = document.getElementById(id);
            if (!element) {
                return;
            }

            const shouldSkipAnimation = isImmediate || shouldReduceMotion === true;

            if (lenis && !isImmediate) {
                lenis.scrollTo(element, {
                    immediate: shouldReduceMotion === true,
                    duration: SECTION_SCROLL_DURATION_SECONDS,
                    easing: easeInOutCubic,
                });
            } else {
                element.scrollIntoView({ behavior: shouldSkipAnimation ? "auto" : "smooth", block: "start" });
            }

            history.replaceState(null, "", `#${id}`);
        },
        [lenis, shouldReduceMotion],
    );
}
