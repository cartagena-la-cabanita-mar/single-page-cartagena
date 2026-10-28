import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SECTION_ICONS } from "@/constants/navigation.constant";
import type { SectionId } from "@/enums/navigation.enum";
import { cn } from "@/utils/common.util";

interface SectionHeaderUIProps {
    id: SectionId;
    lead?: string;
    isOnDark?: boolean;
}

const UNDERLINE_PATH = "M2 9 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0";

export default function SectionHeaderUI({ id, lead, isOnDark = false }: SectionHeaderUIProps) {
    const { t } = useTranslation("navigation");
    const Icon = SECTION_ICONS[id];

    return (
        <header className="mb-12 max-w-3xl lg:mb-16">
            <motion.span
                initial={{ scale: 0.4, rotate: -25, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="grid size-14 place-items-center rounded-full bg-lemon-400 text-sea-900 shadow-lg shadow-sea-950/20"
            >
                <Icon className="size-7" strokeWidth={1.8} aria-hidden="true" />
            </motion.span>

            <h2
                id={`${id}-title`}
                className={cn("mt-6 text-[clamp(2.25rem,5.4vw,4.5rem)] font-semibold", isOnDark && "text-white")}
            >
                {t(`items.${id}`)}
            </h2>

            <svg viewBox="0 0 164 18" className="mt-3 h-4 w-40 text-lemon-400" fill="none" aria-hidden="true">
                <motion.path
                    d={UNDERLINE_PATH}
                    stroke="currentColor"
                    strokeWidth={4}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                />
            </svg>

            {lead && <p className={cn("mt-6 max-w-2xl text-lg", isOnDark ? "text-white/85" : "text-ink/80")}>{lead}</p>}
        </header>
    );
}
