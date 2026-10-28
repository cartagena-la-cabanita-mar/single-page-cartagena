import type { PhoneContact } from "@/interfaces/common.interface";
import type { VenueNote } from "@/enums/islands.enum";

export interface Venue {
    name: string;
    url: string;
    phones: Array<PhoneContact>;
    note?: VenueNote;
}
