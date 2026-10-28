import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, PartyPopper } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CHECKOUT_TASKS } from "@/constants/apartment.constant";
import type { CheckoutTask } from "@/enums/apartment.enum";
import { cn } from "@/utils/common.util";

/** The before-you-leave tasks as a checklist that fills a progress ring and celebrates when complete. */
export default function CheckoutChecklistUI() {
    const { t } = useTranslation("checkout");
    const [doneTasks, setDoneTasks] = useState<Array<CheckoutTask>>([]);
    const progress = doneTasks.length / CHECKOUT_TASKS.length;
    const isComplete = doneTasks.length === CHECKOUT_TASKS.length;

    function toggleTask(task: CheckoutTask) {
        setDoneTasks((current) =>
            current.includes(task) ? current.filter((done) => done !== task) : [...current, task],
        );
    }

    return (
        <div>
            <div className="flex items-center gap-4">
                <svg viewBox="0 0 44 44" className="size-12 shrink-0 -rotate-90" aria-hidden="true">
                    <circle cx={22} cy={22} r={18} fill="none" strokeWidth={5} className="stroke-white/20" />
                    <motion.circle
                        cx={22}
                        cy={22}
                        r={18}
                        fill="none"
                        strokeWidth={5}
                        strokeLinecap="round"
                        className="stroke-lemon-400"
                        initial={false}
                        animate={{ pathLength: progress }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                </svg>
                <p className="text-lg font-semibold text-white">{t("before")}</p>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
                {CHECKOUT_TASKS.map(({ id, Icon }) => {
                    const isDone = doneTasks.includes(id);

                    return (
                        <li key={id}>
                            <button
                                type="button"
                                onClick={() => toggleTask(id)}
                                aria-pressed={isDone}
                                className={cn(
                                    "flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-colors",
                                    isDone ? "bg-lemon-400 text-sea-950" : "bg-white/10 text-white hover:bg-white/15",
                                )}
                            >
                                <span
                                    className={cn(
                                        "grid size-9 shrink-0 place-items-center rounded-full border-2",
                                        isDone ? "border-sea-950 bg-sea-950 text-lemon-400" : "border-white/50",
                                    )}
                                >
                                    {isDone ? (
                                        <Check className="size-5" aria-hidden="true" />
                                    ) : (
                                        <Icon className="size-4" aria-hidden="true" />
                                    )}
                                </span>
                                <span className={cn("flex-1", isDone && "line-through decoration-2")}>
                                    {t(`tasks.${id}`)}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <AnimatePresence>
                {isComplete && (
                    <motion.p
                        className="mt-5 flex items-center gap-3 font-hand text-3xl text-lemon-300"
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <PartyPopper className="size-7" aria-hidden="true" />
                        {t("done")}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
