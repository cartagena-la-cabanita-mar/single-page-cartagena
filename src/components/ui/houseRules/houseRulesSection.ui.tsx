import { Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import RuleSignUI from "@/components/ui/houseRules/ruleSign.ui";
import { HOUSE_RULES } from "@/constants/apartment.constant";
import { SectionId } from "@/enums/navigation.enum";

export default function HouseRulesSectionUI() {
    const { t } = useTranslation("houseRules");

    return (
        <SectionShellUI id={SectionId.HouseRules}>
            <SectionHeaderUI id={SectionId.HouseRules} />

            <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                {HOUSE_RULES.map(({ id, Icon, isInvitation }, index) => (
                    <motion.li
                        key={id}
                        className="flex items-center gap-5 rounded-3xl bg-sea-50 p-5"
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: (index % 2) * 0.1, type: "spring", stiffness: 220, damping: 20 }}
                    >
                        <RuleSignUI Icon={Icon} isInvitation={isInvitation} />
                        <p className="text-lg font-medium">{t(id)}</p>
                    </motion.li>
                ))}
            </ul>

            <div className="mt-12 flex items-center gap-5 rounded-4xl bg-lemon-300 p-6 text-sea-950 sm:p-8">
                <Sun className="animate-spin-slow size-12 shrink-0 text-lemon-600" aria-hidden="true" />
                <p className="font-hand text-3xl leading-tight sm:text-4xl">
                    <span className="font-bold underline decoration-sea-600 decoration-wavy">{t("reminderLabel")}</span>{" "}
                    {t("reminder")}
                </p>
            </div>
        </SectionShellUI>
    );
}
