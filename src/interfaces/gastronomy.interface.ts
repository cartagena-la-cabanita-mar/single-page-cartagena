import type { EateryNote, EateryZone } from "@/enums/gastronomy.enum";

export interface Eatery {
    name: string;
    address: string;
    zone: EateryZone;
    url: string;
    note?: EateryNote;
    isWalkable?: boolean;
}
