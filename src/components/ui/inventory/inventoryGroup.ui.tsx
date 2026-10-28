import { BedDouble, CookingPot, Flower2, Plug, Sofa, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import InventoryItemUI from "@/components/ui/inventory/inventoryItem.ui";
import { InventoryCategory } from "@/enums/apartment.enum";
import type { InventoryGroup } from "@/interfaces/apartment.interface";

interface InventoryGroupUIProps {
    group: InventoryGroup;
}

const CATEGORY_ICONS: Record<InventoryCategory, LucideIcon> = {
    [InventoryCategory.Kitchen]: CookingPot,
    [InventoryCategory.Linen]: BedDouble,
    [InventoryCategory.Decor]: Flower2,
    [InventoryCategory.Appliances]: Plug,
    [InventoryCategory.Balcony]: Sun,
    [InventoryCategory.Furniture]: Sofa,
};

/** One room-by-room category of the inventory, folded like a drawer until someone needs what is inside. */
export default function InventoryGroupUI({ group }: InventoryGroupUIProps) {
    const { t } = useTranslation("inventory");
    const Icon = CATEGORY_ICONS[group.id];

    return (
        <AccordionItem value={group.id} className="first:border-t">
            <AccordionTrigger className="text-2xl">
                <span className="flex min-w-0 flex-1 items-center gap-4">
                    <span
                        aria-hidden="true"
                        className="grid size-11 shrink-0 place-items-center rounded-full bg-sea-100 text-sea-700 transition-colors group-data-[state=open]:bg-lemon-300 group-data-[state=open]:text-sea-900"
                    >
                        <Icon className="size-5" />
                    </span>
                    <span>
                        <span className="block">{t(`categories.${group.id}`)}</span>
                        <span className="mt-0.5 block font-sans text-sm font-medium text-sea-600">
                            {group.items.length} {t("total")}
                        </span>
                    </span>
                </span>
            </AccordionTrigger>

            <AccordionContent>
                <ul className="columns-1 gap-x-14 xl:columns-2">
                    {group.items.map(({ key, quantity }) => (
                        <InventoryItemUI key={key} name={t(`items.${key}`)} quantity={quantity} />
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
}
