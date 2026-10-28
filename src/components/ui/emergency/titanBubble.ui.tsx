import { Bot, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkPillUI from "@/components/ui/commons/linkPill.ui";
import ChatBubbleUI from "@/components/ui/emergency/chatBubble.ui";
import WhatsappButtonUI from "@/components/ui/emergency/whatsappButton.ui";
import { TITAN_CHAT_INFO_URL, TITAN_CHAT_PHONE, TITAN_CHAT_PHONE_LABEL } from "@/constants/emergency.constant";

/** The city's virtual assistant, drawn as the incoming message of a chat. */
export default function TitanBubbleUI() {
    const { t } = useTranslation("emergency");

    return (
        <ChatBubbleUI>
            <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sea-600 text-white">
                    <Bot className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-3xl font-semibold sm:text-4xl">{t("titan")}</h3>
            </div>
            <p className="mt-5 text-ink/85">{t("titanText")}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4">
                <WhatsappButtonUI phone={TITAN_CHAT_PHONE} label={TITAN_CHAT_PHONE_LABEL} />
                <LinkPillUI
                    href={TITAN_CHAT_INFO_URL}
                    Icon={ExternalLink}
                    className="min-h-10 focus-visible:outline-sea-600"
                >
                    {t("learnMore")}
                </LinkPillUI>
            </div>
        </ChatBubbleUI>
    );
}
