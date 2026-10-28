import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import WifiTicketUI from "@/components/ui/wifi/wifiTicket.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function WifiSectionUI() {
    return (
        <SectionShellUI id={SectionId.Wifi} tone="sea">
            <SectionHeaderUI id={SectionId.Wifi} isOnDark />
            <WifiTicketUI />
        </SectionShellUI>
    );
}
