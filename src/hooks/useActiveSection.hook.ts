import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/constants/navigation.constant";
import { SectionId } from "@/enums/navigation.enum";

/** Thin band around 40% of the viewport height: the section crossing it is the one being read. */
const READING_BAND_MARGIN = "-40% 0px -55% 0px";

/** Tracks which section of the guide is currently being read, for the sidebar highlight. */
export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Welcome);

    useEffect(() => {
        const visibleIds = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        visibleIds.add(entry.target.id);
                    } else {
                        visibleIds.delete(entry.target.id);
                    }
                }

                const current = SECTION_IDS.findLast((id) => visibleIds.has(id));
                if (current) {
                    setActiveSection(current);
                }
            },
            { rootMargin: READING_BAND_MARGIN },
        );

        for (const id of SECTION_IDS) {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        }

        return () => observer.disconnect();
    }, []);

    return activeSection;
}
