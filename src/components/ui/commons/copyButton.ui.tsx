import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/utils/common.util";

interface CopyButtonUIProps {
    value: string;
    isOnDark?: boolean;
    className?: string;
}

const COPIED_FEEDBACK_MILLISECONDS = 1800;

export default function CopyButtonUI({ value, isOnDark = true, className }: CopyButtonUIProps) {
    const { t } = useTranslation("common");
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(value);
        setIsCopied(true);
    }

    useEffect(() => {
        if (!isCopied) {
            return;
        }

        const timeout = window.setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MILLISECONDS);
        return () => window.clearTimeout(timeout);
    }, [isCopied]);

    return (
        <button
            type="button"
            onClick={() => void handleCopy()}
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
                isCopied && "bg-lemon-400 text-sea-950",
                !isCopied && isOnDark && "bg-white/15 text-white hover:bg-white/25",
                !isCopied && !isOnDark && "bg-sea-100 text-sea-800 hover:bg-sea-200",
                className,
            )}
        >
            {isCopied ? (
                <Check className="size-4" aria-hidden="true" />
            ) : (
                <Copy className="size-4" aria-hidden="true" />
            )}
            <span aria-live="polite">{isCopied ? t("copied") : t("copy")}</span>
        </button>
    );
}
