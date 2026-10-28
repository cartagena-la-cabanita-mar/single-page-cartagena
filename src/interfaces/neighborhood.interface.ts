import type { PhoneContact } from "@/interfaces/common.interface";
import type { NearbyNote } from "@/enums/neighborhood.enum";

export interface NearbyPlace {
    name: string;
    address: string;
    note?: NearbyNote;
    delivery?: PhoneContact;
}

export interface WalkStop {
    minutes: number;
    labels: Array<"atms" | "restaurants" | "supermarkets" | "marbella">;
}
