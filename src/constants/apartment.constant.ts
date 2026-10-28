import {
    Blinds,
    CigaretteOff,
    Droplets,
    PartyPopper,
    PawPrint,
    Pill,
    Power,
    ShieldAlert,
    Trash2,
    UserX,
    Utensils,
} from "lucide-react";
import { CheckoutTask, HouseRule } from "@/enums/apartment.enum";
import type { CheckoutTaskItem, HouseRuleItem } from "@/interfaces/apartment.interface";

export const APARTMENT_MAPS_QUERY = "Cartagena Beach Resort Carrera 7 #67-77 Crespo Cartagena Colombia";

export const WIFI_NETWORK = "1317";
export const WIFI_PASSWORD = "Cartagena2025";

export const HOST_WHATSAPP = "+573227226006";
export const HOST_WHATSAPP_LABEL = "+57 322 722 6006";

export const AUXILIARY_BED_VIDEO_URL = "https://www.youtube.com/shorts/BmoZGsEvnSU";

export const POOL_OPENING_HOUR = 8;
export const POOL_CLOSING_HOUR = 20;
/** Position of Tuesday in a week that starts on Monday. */
export const MAINTENANCE_WEEKDAY_INDEX = 1;

export const FAN_MAX_SPEED = 5;

export const HOUSE_RULES: Array<HouseRuleItem> = [
    { id: HouseRule.Water, Icon: Droplets, isInvitation: true },
    { id: HouseRule.Visitors, Icon: UserX, isInvitation: false },
    { id: HouseRule.Smoking, Icon: CigaretteOff, isInvitation: false },
    { id: HouseRule.Drugs, Icon: Pill, isInvitation: false },
    { id: HouseRule.Parties, Icon: PartyPopper, isInvitation: false },
    { id: HouseRule.Abuse, Icon: ShieldAlert, isInvitation: false },
    { id: HouseRule.Pets, Icon: PawPrint, isInvitation: false },
];

export const CHECKOUT_TASKS: Array<CheckoutTaskItem> = [
    { id: CheckoutTask.TurnOff, Icon: Power },
    { id: CheckoutTask.Dishes, Icon: Utensils },
    { id: CheckoutTask.Trash, Icon: Trash2 },
    { id: CheckoutTask.Window, Icon: Blinds },
];
