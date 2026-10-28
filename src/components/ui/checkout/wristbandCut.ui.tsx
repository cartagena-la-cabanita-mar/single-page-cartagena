import { motion } from "motion/react";
import { Scissors } from "lucide-react";

const CUT_DELAY_SECONDS = 1.2;

/** The wristband from the lobby gets snipped at check out: scissors slide across and the band falls in two. */
export default function WristbandCutUI() {
    return (
        <div className="relative h-24 w-48 shrink-0" aria-hidden="true">
            <motion.div
                className="absolute top-8 left-0 h-8 w-[48%] origin-right rounded-l-full bg-sea-300"
                initial={{ rotate: 0, y: 0 }}
                whileInView={{ rotate: -14, y: 18 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: CUT_DELAY_SECONDS + 0.3, duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
                className="absolute top-8 right-0 h-8 w-[48%] origin-left rounded-r-full bg-sea-300"
                initial={{ rotate: 0, y: 0 }}
                whileInView={{ rotate: 14, y: 18 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: CUT_DELAY_SECONDS + 0.3, duration: 0.7, ease: "easeOut" }}
            />
            <motion.span
                className="absolute top-3 left-0 text-lemon-400"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 78, opacity: [0, 1, 1, 0] }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.3, duration: CUT_DELAY_SECONDS, ease: "easeInOut" }}
            >
                <Scissors className="size-9 rotate-90" />
            </motion.span>
        </div>
    );
}
