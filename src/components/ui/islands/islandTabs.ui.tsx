import { useTranslation } from "react-i18next";
import IslandPanelUI from "@/components/ui/islands/islandPanel.ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IslandId } from "@/enums/islands.enum";
import { SectionId } from "@/enums/navigation.enum";

const ISLAND_IDS = Object.values(IslandId);

export default function IslandTabsUI() {
    const { t } = useTranslation("islands");

    return (
        <Tabs defaultValue={IslandId.Rosario}>
            <TabsList aria-labelledby={`${SectionId.IslandDayPasses}-title`}>
                {ISLAND_IDS.map((island) => (
                    <TabsTrigger key={island} value={island}>
                        {t(`tabs.${island}`)}
                    </TabsTrigger>
                ))}
            </TabsList>

            {ISLAND_IDS.map((island) => (
                <TabsContent key={island} value={island}>
                    <IslandPanelUI island={island} />
                </TabsContent>
            ))}
        </Tabs>
    );
}
