import { IslandId, VenueNote } from "@/enums/islands.enum";
import type { Venue } from "@/interfaces/islands.interface";

export const ISLAND_VENUES: Record<IslandId, Array<Venue>> = {
    [IslandId.Rosario]: [
        {
            name: "Hotel San Pedro de Majagua",
            url: "https://www.hotelmajagua.com/en/",
            note: VenueNote.Majagua,
            phones: [
                { label: "+57 314 596 8833", tel: "+573145968833" },
                { label: "+57 310 683 4766", tel: "+573106834766" },
                { label: "+57 605 693 0987 (ext. 1103, 1105)", tel: "+576056930987" },
            ],
        },
        {
            name: "Fragata Island House",
            url: "https://fragataisland.com/restaurante/",
            phones: [
                { label: "+57 319 219 8387", tel: "+573192198387" },
                { label: "+57 313 746 5719", tel: "+573137465719" },
            ],
        },
        {
            name: "Hotel Carolina Island",
            url: "https://coralinaisland.com/habitaciones/",
            phones: [{ label: "+57 318 711 5750", tel: "+573187115750" }],
        },
        { name: "Pa’ue Beach Lounge", url: "https://paue.com.co/", phones: [] },
        {
            name: "Hotel Rosario de Mar by Tequendama",
            url: "https://www.hotelestequendama.com.co/es/hotel-rosario-de-mar-by-tequendama",
            phones: [{ label: "+57 300 912 5448", tel: "+573009125448" }],
        },
        { name: "Capri Beach Club", url: "https://beachclubcapri.com/", phones: [] },
    ],
    [IslandId.Baru]: [
        {
            name: "Sabai Beach Club",
            url: "https://www.sabaibaru.com/daytour",
            phones: [
                { label: "+57 310 550 2952", tel: "+573105502952" },
                { label: "+57 310 268 4986", tel: "+573102684986" },
            ],
        },
        {
            name: "Aura Hotel Baru",
            url: "https://aurahotelbaru.com/",
            phones: [{ label: "+57 311 630 3018", tel: "+573116303018" }],
        },
        {
            name: "Aguazul Beach Resort",
            url: "https://aguazulbeachresort.com/",
            phones: [{ label: "+57 314 823 9595", tel: "+573148239595" }],
        },
    ],
    [IslandId.TierraBomba]: [
        {
            name: "Blue Apple Beach",
            url: "https://www.blueapplebeach.com/",
            phones: [{ label: "+57 316 750 6979", tel: "+573167506979" }],
        },
        {
            name: "Makani",
            url: "https://www.makaniluxury.com/",
            phones: [
                { label: "+57 333 602 5269", tel: "+573336025269" },
                { label: "+57 318 335 6186", tel: "+573183356186" },
            ],
        },
        {
            name: "Fénix Beach",
            url: "https://fenix.co/pasadia-cartagena/",
            phones: [{ label: "+57 318 377 1676", tel: "+573183771676" }],
        },
        {
            name: "Amare Beach Club",
            url: "https://www.amarecartagena.com/",
            phones: [{ label: "+57 314 259 4747", tel: "+573142594747" }],
        },
        {
            name: "Namaste",
            url: "https://www.namastebeachclub.com/",
            phones: [{ label: "+57 300 488 9421", tel: "+573004889421" }],
        },
        {
            name: "Éteka Beach",
            url: "https://etekacartagena.com/",
            phones: [{ label: "+57 324 204 8785", tel: "+573242048785" }],
        },
    ],
};
