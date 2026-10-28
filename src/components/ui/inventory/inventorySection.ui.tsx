import { useState } from "react";
import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Accordion } from "@/components/ui/accordion";
import SectionHeaderUI from "@/components/ui/commons/sectionHeader.ui";
import SectionShellUI from "@/components/ui/commons/sectionShell.ui";
import InventoryGroupUI from "@/components/ui/inventory/inventoryGroup.ui";
import InventorySearchUI from "@/components/ui/inventory/inventorySearch.ui";
import { INVENTORY } from "@/constants/inventory.constant";
import { SectionId } from "@/enums/navigation.enum";
import type { InventoryGroup } from "@/interfaces/apartment.interface";
import type { InventoryItemKey } from "@/types/inventory.type";

const DEFAULT_OPEN_CATEGORIES: Array<string> = INVENTORY.slice(0, 1).map(({ id }) => id);

/** Lowercase and without accents, so typing "TAZON" finds "Tazón". */
function normalizeText(text: string): string {
    return text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/** Keeps the entries whose name contains every word typed, in any order, and drops the groups left empty. */
function filterInventory(query: string, getItemName: (key: InventoryItemKey) => string): Array<InventoryGroup> {
    const terms = normalizeText(query).split(/\s+/).filter(Boolean);

    if (terms.length === 0) {
        return INVENTORY;
    }

    return INVENTORY.map((group) => ({
        ...group,
        items: group.items.filter(({ key }) => {
            const name = normalizeText(getItemName(key));
            return terms.every((term) => name.includes(term));
        }),
    })).filter((group) => group.items.length > 0);
}

export default function InventorySectionUI() {
    const { t } = useTranslation("inventory");
    const [query, setQuery] = useState("");
    const [openCategories, setOpenCategories] = useState(DEFAULT_OPEN_CATEGORIES);

    function getItemName(key: InventoryItemKey): string {
        return t(`items.${key}`);
    }

    function handleQueryChange(nextQuery: string) {
        const isSearching = nextQuery.trim() !== "";
        const matchingCategories = filterInventory(nextQuery, getItemName).map(({ id }) => id);

        setQuery(nextQuery);
        setOpenCategories(isSearching ? matchingCategories : DEFAULT_OPEN_CATEGORIES);
    }

    const visibleGroups = filterInventory(query, getItemName);
    const visibleCount = visibleGroups.reduce((total, { items }) => total + items.length, 0);

    return (
        <SectionShellUI id={SectionId.Inventory} tone="white">
            <SectionHeaderUI id={SectionId.Inventory} lead={t("lead")} />

            <InventorySearchUI query={query} count={visibleCount} onQueryChange={handleQueryChange} />

            {visibleGroups.length > 0 ? (
                <Accordion type="multiple" value={openCategories} onValueChange={setOpenCategories} className="mt-10">
                    {visibleGroups.map((group) => (
                        <InventoryGroupUI key={group.id} group={group} />
                    ))}
                </Accordion>
            ) : (
                <div className="mt-14 flex flex-col items-center gap-4 text-center">
                    <SearchX className="size-12 text-sea-300" strokeWidth={1.5} aria-hidden="true" />
                    <p className="font-hand text-3xl text-sea-700">{t("empty")}</p>
                </div>
            )}
        </SectionShellUI>
    );
}
