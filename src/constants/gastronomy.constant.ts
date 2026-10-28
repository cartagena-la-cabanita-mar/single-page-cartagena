import { EateryCategory, EateryNote, EateryZone } from "@/enums/gastronomy.enum";
import type { Eatery } from "@/interfaces/gastronomy.interface";

export const EATERIES: Record<EateryCategory, Array<Eatery>> = {
    [EateryCategory.Restaurants]: [
        {
            name: "La Mulata",
            address: "Cl. del Quero #9 58",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/restaurantelamulata/",
        },
        {
            name: "Don Juan",
            address: "Av. Carlos Escallón 34-01",
            zone: EateryZone.Historic,
            url: "https://restaurantedonjuan.co/",
        },
        {
            name: "Restaurante Candé",
            address: "San Diego, Cra. 10, Cl. de la Serrezuela #39-02",
            zone: EateryZone.Historic,
            url: "https://restaurantecande.com/",
        },
        {
            name: "La Vitrola",
            address: "Cra. 2 #33-66",
            zone: EateryZone.Historic,
            url: "https://lavitrolarestaurante.com/",
        },
        {
            name: "Nikú",
            address: "Calle San Juan de Dios #3-35",
            zone: EateryZone.Historic,
            url: "https://casaardente.com/niku/",
        },
        {
            name: "Agua de León",
            address: "Calle de Ayos #4-46",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/aguadeleonrestaurante/",
        },
        {
            name: "Rabo de pez",
            address: "Edificio Andian, Cl. 32 #5-09 Local 3",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/rabodepez/",
        },
        {
            name: "Juan del Mar",
            address: "Plaza de San Diego, 8-12",
            zone: EateryZone.Historic,
            url: "https://juandelmar.com/es/inicio/",
        },
        {
            name: "Celele",
            address: "Calle del Espíritu Santo, Cra. 10c #29-200",
            zone: EateryZone.Getsemani,
            url: "https://celelerestaurante.com/",
        },
        {
            name: "La Pescadería",
            address: "Cl. 70 #5-79",
            zone: EateryZone.Crespo,
            url: "https://www.instagram.com/lapescaderiactg/",
            isWalkable: true,
        },
        {
            name: "Atrium",
            address: "Cra. 2a #70-04",
            zone: EateryZone.Crespo,
            url: "https://www.atrium.com.co/",
        },
    ],
    [EateryCategory.Brunch]: [
        {
            name: "Ely Café",
            address: "Cl. 7 #2-50",
            zone: EateryZone.Bocagrande,
            url: "https://www.instagram.com/ely.cafe/",
        },
        {
            name: "Época",
            address: "Calle del Arzobispado, Cra. 5 #34-52",
            zone: EateryZone.Historic,
            url: "https://epocacafe.co/",
        },
        {
            name: "El Barón",
            address: "Carrera 4, Cl. San Pedro Claver #31-7",
            zone: EateryZone.Historic,
            url: "https://www.elbaron.co/",
        },
        {
            name: "Pascal",
            address: "Cl. 30 #8b-108",
            zone: EateryZone.Getsemani,
            url: "https://www.instagram.com/quienespascal/",
        },
        {
            name: "Hotel Osh",
            address: "Cl. 31 #10-77",
            zone: EateryZone.Getsemani,
            url: "https://oshhotels.com/",
        },
    ],
    [EateryCategory.Bars]: [
        {
            name: "Botika Santa Clara",
            address: "Calle El Torno #39-29, entrada lateral",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/botikasantaclarabar/",
            note: EateryNote.Botika,
        },
        {
            name: "Donde Fidel",
            address: "Portal de los Dulces, Cra. 4",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/donde_fidel/",
            note: EateryNote.Fidel,
        },
        {
            name: "Baluarte de la Gente",
            address: "Playa de la Artillería",
            zone: EateryZone.Historic,
            url: "https://www.instagram.com/baluartesantodomingo/",
            note: EateryNote.Baluarte,
        },
        {
            name: "7 Cielos",
            address: "Cra. 3 #10-59, piso 7",
            zone: EateryZone.Bocagrande,
            url: "https://www.instagram.com/7cielos_rooftop/",
            note: EateryNote.SevenSkies,
        },
    ],
};
