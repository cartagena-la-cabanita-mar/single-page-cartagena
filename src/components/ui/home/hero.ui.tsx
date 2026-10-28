import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslation } from "react-i18next";
import AwningUI from "@/components/ui/commons/awning.ui";
import PhotoUI from "@/components/ui/commons/photo.ui";
import DoorPlateUI from "@/components/ui/navigation/doorPlate.ui";
import { SectionId } from "@/enums/navigation.enum";
import useGoToSection from "@/hooks/useGoToSection.hook";

const GREETING_LETTER_DELAY_SECONDS = 0.045;
const GREETING_START_DELAY_SECONDS = 0.8;
const COPY_REVEAL_DELAY_SECONDS = 1.3;

interface GreetingWord {
    text: string;
    startIndex: number;
}

/** Splits the greeting into words, remembering how many letters come before each one for the stagger. */
function toGreetingWords(greeting: string): Array<GreetingWord> {
    return greeting.split(" ").map((text, index, words) => ({
        text,
        startIndex: words.slice(0, index).reduce((count, word) => count + word.length, 0),
    }));
}

/** The guide opens with the sunset seen from the bed, spread across the whole width like a banner. */
export default function HeroUI() {
    const { t } = useTranslation("translation");
    const goToSection = useGoToSection();
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const greeting = t("hero.greeting");

    return (
        <div ref={heroRef} className="relative isolate flex min-h-svh items-center overflow-hidden bg-sea-950">
            <motion.div
                aria-hidden="true"
                className="absolute inset-0 -z-20"
                style={{ y: photoY }}
                initial={{ scale: 1.18 }}
                animate={{ scale: 1.04 }}
                transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <PhotoUI slug="hero" isEager sizes="100vw" className="size-full object-cover object-[62%_50%]" />
            </motion.div>
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-r from-sea-950/85 via-sea-950/55 to-sea-950/10 max-lg:from-sea-950/70 max-lg:via-sea-950/60 max-lg:to-sea-950/40"
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 h-[38%] bg-linear-to-t from-white via-white/70 to-transparent"
            />

            <AwningUI className="absolute inset-x-0 top-0 z-30 h-16 sm:h-20 lg:h-24" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-36 pb-40 sm:px-8 lg:px-12 lg:pt-40">
                <div className="max-w-2xl">
                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, rotateX: -80 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    >
                        <DoorPlateUI size="lg" />
                        <div>
                            <p className="font-display text-2xl font-semibold text-lemon-300 italic">
                                {t("hero.plate")}
                            </p>
                            <p className="text-base text-white/85">{t("brand.resort")}</p>
                        </div>
                    </motion.div>

                    <h1
                        aria-label={greeting}
                        className="mt-8 flex flex-wrap gap-x-[0.25em] text-[clamp(2.5rem,5.4vw,5rem)] leading-[1.02] font-bold text-white"
                    >
                        {toGreetingWords(greeting).map(({ text, startIndex }) => (
                            <span
                                key={startIndex}
                                aria-hidden="true"
                                className="inline-flex overflow-hidden pb-2 whitespace-nowrap"
                            >
                                {Array.from(text).map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block"
                                        initial={{ y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            delay:
                                                GREETING_START_DELAY_SECONDS +
                                                (startIndex + index) * GREETING_LETTER_DELAY_SECONDS,
                                            duration: 0.7,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        className="mt-8 max-w-xl space-y-3 text-lg text-white/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: COPY_REVEAL_DELAY_SECONDS, duration: 0.9 }}
                    >
                        <p>{t("hero.intro")}</p>
                        <p>{t("hero.lead")}</p>
                    </motion.div>

                    <motion.button
                        type="button"
                        onClick={() => goToSection(SectionId.CheckIn)}
                        className="mt-10 inline-flex items-center gap-2 rounded-full bg-lemon-400 px-7 py-3.5 text-base font-bold text-sea-950 shadow-lg shadow-sea-950/30 transition-colors hover:bg-lemon-300"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: COPY_REVEAL_DELAY_SECONDS + 0.3, duration: 0.7 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        {t("hero.start")}
                        <ChevronDown className="animate-bob size-5" aria-hidden="true" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
