import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import BeachCardsUI from "@/components/ui/neighborhood/beachCards.ui";
import ConveniencesUI from "@/components/ui/neighborhood/conveniences.ui";
import NearbyPlacesUI from "@/components/ui/neighborhood/nearbyPlaces.ui";
import WalkPathUI from "@/components/ui/neighborhood/walkPath.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function NeighborhoodSectionUI() {
    return (
        <SectionShellUI id={SectionId.Neighborhood}>
            <SectionHeaderUI id={SectionId.Neighborhood} />

            <div className="flex flex-col gap-20">
                <WalkPathUI />
                <NearbyPlacesUI />
                <ConveniencesUI />
                <BeachCardsUI />
            </div>
        </SectionShellUI>
    );
}
