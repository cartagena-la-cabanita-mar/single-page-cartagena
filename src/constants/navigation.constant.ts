import {
    BedDouble,
    Clapperboard,
    ClipboardList,
    Home,
    KeyRound,
    Landmark,
    LogOut,
    MapPin,
    Sailboat,
    ScrollText,
    ShoppingBag,
    TriangleAlert,
    Tv2,
    UtensilsCrossed,
    Waves,
    Wifi,
    Wind,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NavGroupId, SectionId } from "@/enums/navigation.enum";
import type { NavGroup } from "@/interfaces/navigation.interface";

export const SECTION_ICONS: Record<SectionId, LucideIcon> = {
    [SectionId.Welcome]: Home,
    [SectionId.CheckIn]: KeyRound,
    [SectionId.Electricity]: Zap,
    [SectionId.AirConditioning]: Wind,
    [SectionId.Wifi]: Wifi,
    [SectionId.HouseRules]: ScrollText,
    [SectionId.RemoteControls]: Tv2,
    [SectionId.VideoGuides]: Clapperboard,
    [SectionId.CheckOut]: LogOut,
    [SectionId.AuxiliaryBed]: BedDouble,
    [SectionId.CommonAreas]: Waves,
    [SectionId.Neighborhood]: MapPin,
    [SectionId.Tourism]: Landmark,
    [SectionId.Gastronomy]: UtensilsCrossed,
    [SectionId.IslandDayPasses]: Sailboat,
    [SectionId.Shopping]: ShoppingBag,
    [SectionId.Emergency]: TriangleAlert,
    [SectionId.Inventory]: ClipboardList,
};

export const NAV_GROUPS: Array<NavGroup> = [
    {
        id: NavGroupId.Apartment,
        sections: [
            SectionId.Welcome,
            SectionId.CheckIn,
            SectionId.Electricity,
            SectionId.AirConditioning,
            SectionId.Wifi,
            SectionId.HouseRules,
            SectionId.RemoteControls,
            SectionId.VideoGuides,
            SectionId.CheckOut,
            SectionId.AuxiliaryBed,
            SectionId.CommonAreas,
        ],
    },
    {
        id: NavGroupId.Explore,
        sections: [
            SectionId.Neighborhood,
            SectionId.Tourism,
            SectionId.Gastronomy,
            SectionId.IslandDayPasses,
            SectionId.Shopping,
        ],
    },
    {
        id: NavGroupId.Help,
        sections: [SectionId.Emergency, SectionId.Inventory],
    },
];

export const SECTION_IDS: Array<SectionId> = NAV_GROUPS.flatMap((group) => group.sections);

export const MOBILE_HEADER_HEIGHT_PX = 56;
export const SECTION_SCROLL_DURATION_SECONDS = 1.6;
