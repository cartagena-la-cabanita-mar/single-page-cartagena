import BarsPanelUI from "@/components/ui/gastronomy/barsPanel.ui";
import MenuCategoryUI from "@/components/ui/gastronomy/menuCategory.ui";
import { EateryCategory } from "@/enums/gastronomy.enum";

/** A printed menu with a striped napkin band on top; its last page, the bars, is printed on the night sky. */
export default function MenuBoardUI() {
    return (
        <div className="overflow-hidden rounded-3xl border-2 border-sea-700 bg-lemon-50 shadow-xl shadow-sea-900/10">
            <div aria-hidden="true" className="h-3 border-b-2 border-sea-700 pattern-stripes" />
            <div className="flex flex-col gap-16 px-5 pt-10 pb-24 sm:px-10 sm:pt-12">
                <MenuCategoryUI category={EateryCategory.Restaurants} />
                <MenuCategoryUI category={EateryCategory.Brunch} />
            </div>
            <BarsPanelUI />
        </div>
    );
}
