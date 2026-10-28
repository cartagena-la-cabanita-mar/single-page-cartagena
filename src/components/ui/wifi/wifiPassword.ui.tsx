import { useState } from "react";
import type { ChangeEvent } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import CopyButtonUI from "@/components/ui/commons/copyButton.ui";
import PadlockUI from "@/components/ui/wifi/padlock.ui";
import { WIFI_VAULT } from "@/constants/apartment.constant";
import { decryptWifiPassword } from "@/utils/wifiVault.util";

const CODE_LENGTH = 4;
const SHAKE_OFFSETS = [0, -10, 10, -8, 8, -4, 0];
/** The padlock opens first; the password appears a moment later so the guest sees the shackle swing. */
const REVEAL_DELAY_SECONDS = 0.6;

/** The Wi-Fi password behind a padlock: it only shows up when the guest types the 4-digit access code. */
export default function WifiPasswordUI() {
    const { t } = useTranslation("wifi");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState<string>();
    const [hasError, setHasError] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const isUnlocked = password !== undefined;

    async function tryUnlock(attempt: string) {
        if (!WIFI_VAULT) {
            return;
        }

        setIsChecking(true);
        try {
            const result = await decryptWifiPassword(attempt, WIFI_VAULT);
            if (result === undefined) {
                setHasError(true);
                setCode("");
            } else {
                setPassword(result);
            }
        } catch {
            setHasError(true);
        } finally {
            setIsChecking(false);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const digits = event.target.value.replace(/\D/g, "").slice(0, CODE_LENGTH);
        setCode(digits);
        setHasError(false);

        if (digits.length === CODE_LENGTH) {
            void tryUnlock(digits);
        }
    }

    return (
        <div>
            <p className="text-sm font-semibold text-sea-600">{t("password")}</p>

            {!WIFI_VAULT && <p className="mt-2 text-ink/70">{t("unavailable")}</p>}

            {WIFI_VAULT && (
                <motion.div
                    className="mt-2 flex flex-wrap items-center gap-4"
                    animate={hasError ? { x: SHAKE_OFFSETS } : { x: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <PadlockUI isOpen={isUnlocked} />

                    {isUnlocked ? (
                        <motion.div
                            className="flex flex-wrap items-center gap-x-6 gap-y-2"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: REVEAL_DELAY_SECONDS }}
                        >
                            <p className="font-display text-3xl font-bold break-all text-sea-900 sm:text-4xl">
                                {password}
                            </p>
                            <CopyButtonUI value={password} isOnDark={false} />
                        </motion.div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                maxLength={CODE_LENGTH}
                                value={code}
                                onChange={handleChange}
                                disabled={isChecking}
                                aria-label={t("codeLabel")}
                                aria-invalid={hasError}
                                placeholder="••••"
                                className="w-40 rounded-2xl border-2 border-sea-200 bg-sea-50 px-4 py-2 text-center font-display text-3xl tracking-[0.35em] text-sea-900 focus:border-sea-500 aria-invalid:border-error"
                            />
                            <p className="mt-2 text-sm text-ink/75" aria-live="polite">
                                {hasError ? t("wrongCode") : isChecking ? t("checking") : t("locked")}
                            </p>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
}
