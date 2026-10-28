import type { LucideIcon } from "lucide-react";
import type { CheckoutTask, HouseRule, InventoryCategory } from "@/enums/apartment.enum";
import type { InventoryItemKey } from "@/types/inventory.type";

export interface HouseRuleItem {
    id: HouseRule;
    Icon: LucideIcon;
    /** Rules that invite a good habit instead of forbidding something. */
    isInvitation: boolean;
}

export interface CheckoutTaskItem {
    id: CheckoutTask;
    Icon: LucideIcon;
}

export interface InventoryEntry {
    key: InventoryItemKey;
    quantity: number;
}

export interface InventoryGroup {
    id: InventoryCategory;
    items: Array<InventoryEntry>;
}
