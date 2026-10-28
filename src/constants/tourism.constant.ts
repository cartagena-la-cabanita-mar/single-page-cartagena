import { SectionId } from "@/enums/navigation.enum";
import { PlaceId } from "@/enums/tourism.enum";
import type { Place } from "@/interfaces/tourism.interface";

export const PLACES: Array<Place> = [
    { id: PlaceId.WalledCity, photo: "walled-city", mapsQuery: "Ciudad Amurallada Cartagena de Indias" },
    { id: PlaceId.SantoDomingo, photo: "santo-domingo", mapsQuery: "Plaza Santo Domingo Cartagena de Indias" },
    { id: PlaceId.PlazaBolivar, photo: "plaza-bolivar", mapsQuery: "Plaza Bolívar Cartagena de Indias" },
    { id: PlaceId.SanPedroClaver, photo: "san-pedro-claver", mapsQuery: "Plaza San Pedro Claver Cartagena" },
    { id: PlaceId.ClockTower, photo: "torre-del-reloj", mapsQuery: "Torre del Reloj Cartagena de Indias" },
    {
        id: PlaceId.Cathedral,
        photo: "catedral",
        mapsQuery: "Catedral de Santa Catalina de Alejandría Cartagena",
    },
    { id: PlaceId.HerediaTheater, photo: "teatro-heredia", mapsQuery: "Teatro Adolfo Mejía Cartagena" },
    { id: PlaceId.Sunset, photo: "sunset-wall", mapsQuery: "Baluarte de la Gente Cartagena" },
    { id: PlaceId.Bovedas, photo: "bovedas", mapsQuery: "Las Bóvedas de Santa Clara Cartagena" },
    { id: PlaceId.IndiaCatalina, photo: "india-catalina", mapsQuery: "Monumento a la India Catalina Cartagena" },
    { id: PlaceId.CallejonEstribos, photo: "callejon-estribos", mapsQuery: "Callejón de los Estribos Cartagena" },
    { id: PlaceId.Getsemani, photo: "getsemani", mapsQuery: "Plaza de la Santísima Trinidad Getsemaní Cartagena" },
    { id: PlaceId.SanFelipe, photo: "san-felipe", mapsQuery: "Castillo de San Felipe de Barajas Cartagena" },
    { id: PlaceId.LaPopa, photo: "cerro-popa", mapsQuery: "Convento de la Popa Cartagena" },
    {
        id: PlaceId.Rosario,
        photo: "rosario-islands",
        mapsQuery: "Muelle de la Bodeguita Cartagena",
        relatedSection: SectionId.IslandDayPasses,
    },
];
