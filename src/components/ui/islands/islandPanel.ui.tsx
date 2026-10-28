import { motion } from "motion/react";
import FramedPhotoUI from "@/components/ui/commons/framedPhoto.ui";
import VenueRowUI from "@/components/ui/islands/venueRow.ui";
import { ISLAND_VENUES } from "@/constants/islands.constant";
import { IslandId } from "@/enums/islands.enum";
import type { PhotoSlug } from "@/types/photos.type";

interface IslandPanelUIProps {
    island: IslandId;
}

const ISLAND_PHOTOS: Record<IslandId, PhotoSlug> = {
    [IslandId.Rosario]: "rosario-islands",
    [IslandId.Baru]: "baru",
    [IslandId.TierraBomba]: "tierra-bomba",
};

/** The photo of one island with its venues beside it. It fades in each time its tab is opened. */
export default function IslandPanelUI({ island }: IslandPanelUIProps) {
    return (
        <motion.div
            className="grid items-start gap-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-16"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            <FramedPhotoUI
                slug={ISLAND_PHOTOS[island]}
                shape="arch"
                sizes="(min-width: 1280px) 24rem, (min-width: 448px) 28rem, 90vw"
                className="mx-auto aspect-4/3 w-full max-w-md xl:sticky xl:top-8 xl:mx-0 xl:aspect-4/5 xl:max-w-none"
            />

            <ul>
                {ISLAND_VENUES[island].map((venue) => (
                    <VenueRowUI key={venue.name} venue={venue} />
                ))}
            </ul>
        </motion.div>
    );
}
