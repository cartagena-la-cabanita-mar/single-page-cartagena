import { NearbyNote } from "@/enums/neighborhood.enum";
import type { NearbyPlace, WalkStop } from "@/interfaces/neighborhood.interface";

export const NEARBY_RESTAURANTS: Array<NearbyPlace> = [
    { name: "La Pescadería", address: "Cl. 70 #5-79", note: NearbyNote.LaPescaderia },
    { name: "Frisby", address: "Cl. 70 #3-37" },
    {
        name: "Atrium",
        address: "Cra. 2a #70-04",
        note: NearbyNote.Atrium,
        delivery: { label: "322 799 3073", tel: "+573227993073" },
    },
    { name: "Kokoriko", address: "Cl. 70 #6" },
    { name: "Bendito frito", address: "Cl. 70 #5-7", note: NearbyNote.BenditoFrito },
    { name: "Qbano", address: "Cra. 2a #70-04" },
];

export const NEARBY_BAKERY: NearbyPlace = { name: "La Casa del Pan", address: "Cl. 70 #7-68" };

/** Supermarkets marked on the host's map of Calle 70. */
export const SUPERMARKETS: Array<string> = ["Ísimo", "D1", "Ara", "Megatiendas", "Éxito"];

export const WALK_STOPS: Array<WalkStop> = [
    { minutes: 5, labels: ["atms", "restaurants"] },
    { minutes: 10, labels: ["supermarkets"] },
    { minutes: 15, labels: ["marbella"] },
];
