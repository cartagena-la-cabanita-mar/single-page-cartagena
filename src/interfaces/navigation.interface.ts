import type { NavGroupId, SectionId } from "@/enums/navigation.enum";

export interface NavGroup {
    id: NavGroupId;
    sections: Array<SectionId>;
}
