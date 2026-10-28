import "i18next";

import translation from "@/i18n/es/translation.json";
import common from "@/i18n/es/common.json";
import metadata from "@/i18n/es/metadata.json";
import navigation from "@/i18n/es/navigation.json";
import photos from "@/i18n/es/photos.json";
import checkin from "@/i18n/es/checkin.json";
import electricity from "@/i18n/es/electricity.json";
import airConditioning from "@/i18n/es/airConditioning.json";
import wifi from "@/i18n/es/wifi.json";
import houseRules from "@/i18n/es/houseRules.json";
import remoteControls from "@/i18n/es/remoteControls.json";
import videoGuides from "@/i18n/es/videoGuides.json";
import checkout from "@/i18n/es/checkout.json";
import auxiliaryBed from "@/i18n/es/auxiliaryBed.json";
import commonAreas from "@/i18n/es/commonAreas.json";
import neighborhood from "@/i18n/es/neighborhood.json";
import tourism from "@/i18n/es/tourism.json";
import gastronomy from "@/i18n/es/gastronomy.json";
import islands from "@/i18n/es/islands.json";
import shopping from "@/i18n/es/shopping.json";
import emergency from "@/i18n/es/emergency.json";
import inventory from "@/i18n/es/inventory.json";
import comeBack from "@/i18n/es/comeBack.json";

const resources = {
    translation,
    common,
    metadata,
    navigation,
    photos,
    checkin,
    electricity,
    airConditioning,
    wifi,
    houseRules,
    remoteControls,
    videoGuides,
    checkout,
    auxiliaryBed,
    commonAreas,
    neighborhood,
    tourism,
    gastronomy,
    islands,
    shopping,
    emergency,
    inventory,
    comeBack,
} as const;

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "translation";
        resources: typeof resources;
    }
}
