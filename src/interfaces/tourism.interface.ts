import type { PlaceId } from "@/enums/tourism.enum";
import type { SectionId } from "@/enums/navigation.enum";
import type { PhotoSlug } from "@/types/photos.type";

export interface Place {
    id: PlaceId;
    photo: PhotoSlug;
    mapsQuery: string;
    /** Section of this guide that continues the story of the place. */
    relatedSection?: SectionId;
}
