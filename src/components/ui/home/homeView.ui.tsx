import { useTranslation } from "react-i18next";
import AirConditioningSectionUI from "@/components/ui/airConditioning/airConditioningSection.ui";
import AuxiliaryBedSectionUI from "@/components/ui/auxiliaryBed/auxiliaryBedSection.ui";
import CheckInSectionUI from "@/components/ui/checkin/checkInSection.ui";
import CheckoutSectionUI from "@/components/ui/checkout/checkoutSection.ui";
import ComeBackSectionUI from "@/components/ui/comeBack/comeBackSection.ui";
import CommonAreasSectionUI from "@/components/ui/commonAreas/commonAreasSection.ui";
import ElectricitySectionUI from "@/components/ui/electricity/electricitySection.ui";
import EmergencySectionUI from "@/components/ui/emergency/emergencySection.ui";
import GastronomySectionUI from "@/components/ui/gastronomy/gastronomySection.ui";
import FooterUI from "@/components/ui/home/footer.ui";
import WelcomeSectionUI from "@/components/ui/home/welcomeSection.ui";
import HouseRulesSectionUI from "@/components/ui/houseRules/houseRulesSection.ui";
import InventorySectionUI from "@/components/ui/inventory/inventorySection.ui";
import IslandDayPassesSectionUI from "@/components/ui/islands/islandDayPassesSection.ui";
import MobileNavUI from "@/components/ui/navigation/mobileNav.ui";
import SideBarUI from "@/components/ui/navigation/sideBar.ui";
import NeighborhoodSectionUI from "@/components/ui/neighborhood/neighborhoodSection.ui";
import RemoteControlsSectionUI from "@/components/ui/remoteControls/remoteControlsSection.ui";
import ShoppingSectionUI from "@/components/ui/shopping/shoppingSection.ui";
import VideoGuidesSectionUI from "@/components/ui/videoGuides/videoGuidesSection.ui";
import TourismSectionUI from "@/components/ui/tourism/tourismSection.ui";
import WifiSectionUI from "@/components/ui/wifi/wifiSection.ui";
import useActiveSection from "@/hooks/useActiveSection.hook";
import useDocumentMeta from "@/hooks/useDocumentMeta.hook";
import useHashScroll from "@/hooks/useHashScroll.hook";

const MAIN_CONTENT_ID = "main-content";

/** The whole guide: a fixed sidebar (a top bar on phones) and every section, in the order of the printed manual. */
export default function HomeViewUI() {
    const { t } = useTranslation("navigation");
    const activeSection = useActiveSection();
    useDocumentMeta();
    useHashScroll();

    return (
        <>
            <a
                href={`#${MAIN_CONTENT_ID}`}
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-lemon-400 focus:px-5 focus:py-2 focus:font-bold focus:text-sea-950"
            >
                {t("skip")}
            </a>
            <SideBarUI activeSection={activeSection} />
            <MobileNavUI activeSection={activeSection} />

            <div className="pt-14 lg:pt-0 lg:pl-76">
                <main id={MAIN_CONTENT_ID}>
                    <WelcomeSectionUI />
                    <CheckInSectionUI />
                    <ElectricitySectionUI />
                    <AirConditioningSectionUI />
                    <WifiSectionUI />
                    <HouseRulesSectionUI />
                    <RemoteControlsSectionUI />
                    <VideoGuidesSectionUI />
                    <CheckoutSectionUI />
                    <AuxiliaryBedSectionUI />
                    <CommonAreasSectionUI />
                    <NeighborhoodSectionUI />
                    <TourismSectionUI />
                    <GastronomySectionUI />
                    <IslandDayPassesSectionUI />
                    <ShoppingSectionUI />
                    <EmergencySectionUI />
                    <InventorySectionUI />
                    <ComeBackSectionUI />
                </main>
                <FooterUI />
            </div>
        </>
    );
}
