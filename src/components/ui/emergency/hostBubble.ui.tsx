import { useTranslation } from "react-i18next";
import LemonUI from "@/components/ui/commons/lemon.ui";
import ChatBubbleUI from "@/components/ui/emergency/chatBubble.ui";
import WhatsappButtonUI from "@/components/ui/emergency/whatsappButton.ui";
import { HOST_WHATSAPP, HOST_WHATSAPP_LABEL } from "@/constants/apartment.constant";

/** The host's own message in the chat, signed with a lemon. */
export default function HostBubbleUI() {
    const { t } = useTranslation("emergency");

    return (
        <ChatBubbleUI isOutgoing>
            <LemonUI className="w-16 -rotate-6" />
            <h3 className="mt-4 font-hand text-5xl font-bold text-white">{t("helpTitle")}</h3>
            <p className="mt-3 text-lg text-white/90">{t("helpText")}</p>
            <div className="mt-6">
                <WhatsappButtonUI phone={HOST_WHATSAPP} label={HOST_WHATSAPP_LABEL} isOnDark />
            </div>
        </ChatBubbleUI>
    );
}
