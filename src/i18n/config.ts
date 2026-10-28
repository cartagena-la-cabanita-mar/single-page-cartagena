import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import esTranslation from "@/i18n/es/translation.json";
import esCommon from "@/i18n/es/common.json";
import esMetadata from "@/i18n/es/metadata.json";
import esNavigation from "@/i18n/es/navigation.json";
import esPhotos from "@/i18n/es/photos.json";
import esCheckin from "@/i18n/es/checkin.json";
import esElectricity from "@/i18n/es/electricity.json";
import esAirConditioning from "@/i18n/es/airConditioning.json";
import esWifi from "@/i18n/es/wifi.json";
import esHouseRules from "@/i18n/es/houseRules.json";
import esRemoteControls from "@/i18n/es/remoteControls.json";
import esVideoGuides from "@/i18n/es/videoGuides.json";
import esCheckout from "@/i18n/es/checkout.json";
import esAuxiliaryBed from "@/i18n/es/auxiliaryBed.json";
import esCommonAreas from "@/i18n/es/commonAreas.json";
import esNeighborhood from "@/i18n/es/neighborhood.json";
import esTourism from "@/i18n/es/tourism.json";
import esGastronomy from "@/i18n/es/gastronomy.json";
import esIslands from "@/i18n/es/islands.json";
import esShopping from "@/i18n/es/shopping.json";
import esEmergency from "@/i18n/es/emergency.json";
import esInventory from "@/i18n/es/inventory.json";
import esComeBack from "@/i18n/es/comeBack.json";

import enTranslation from "@/i18n/en/translation.json";
import enCommon from "@/i18n/en/common.json";
import enMetadata from "@/i18n/en/metadata.json";
import enNavigation from "@/i18n/en/navigation.json";
import enPhotos from "@/i18n/en/photos.json";
import enCheckin from "@/i18n/en/checkin.json";
import enElectricity from "@/i18n/en/electricity.json";
import enAirConditioning from "@/i18n/en/airConditioning.json";
import enWifi from "@/i18n/en/wifi.json";
import enHouseRules from "@/i18n/en/houseRules.json";
import enRemoteControls from "@/i18n/en/remoteControls.json";
import enVideoGuides from "@/i18n/en/videoGuides.json";
import enCheckout from "@/i18n/en/checkout.json";
import enAuxiliaryBed from "@/i18n/en/auxiliaryBed.json";
import enCommonAreas from "@/i18n/en/commonAreas.json";
import enNeighborhood from "@/i18n/en/neighborhood.json";
import enTourism from "@/i18n/en/tourism.json";
import enGastronomy from "@/i18n/en/gastronomy.json";
import enIslands from "@/i18n/en/islands.json";
import enShopping from "@/i18n/en/shopping.json";
import enEmergency from "@/i18n/en/emergency.json";
import enInventory from "@/i18n/en/inventory.json";
import enComeBack from "@/i18n/en/comeBack.json";

import frTranslation from "@/i18n/fr/translation.json";
import frCommon from "@/i18n/fr/common.json";
import frMetadata from "@/i18n/fr/metadata.json";
import frNavigation from "@/i18n/fr/navigation.json";
import frPhotos from "@/i18n/fr/photos.json";
import frCheckin from "@/i18n/fr/checkin.json";
import frElectricity from "@/i18n/fr/electricity.json";
import frAirConditioning from "@/i18n/fr/airConditioning.json";
import frWifi from "@/i18n/fr/wifi.json";
import frHouseRules from "@/i18n/fr/houseRules.json";
import frRemoteControls from "@/i18n/fr/remoteControls.json";
import frVideoGuides from "@/i18n/fr/videoGuides.json";
import frCheckout from "@/i18n/fr/checkout.json";
import frAuxiliaryBed from "@/i18n/fr/auxiliaryBed.json";
import frCommonAreas from "@/i18n/fr/commonAreas.json";
import frNeighborhood from "@/i18n/fr/neighborhood.json";
import frTourism from "@/i18n/fr/tourism.json";
import frGastronomy from "@/i18n/fr/gastronomy.json";
import frIslands from "@/i18n/fr/islands.json";
import frShopping from "@/i18n/fr/shopping.json";
import frEmergency from "@/i18n/fr/emergency.json";
import frInventory from "@/i18n/fr/inventory.json";
import frComeBack from "@/i18n/fr/comeBack.json";

import { Language } from "@/enums/language.enum";

const es = {
    translation: esTranslation,
    common: esCommon,
    metadata: esMetadata,
    navigation: esNavigation,
    photos: esPhotos,
    checkin: esCheckin,
    electricity: esElectricity,
    airConditioning: esAirConditioning,
    wifi: esWifi,
    houseRules: esHouseRules,
    remoteControls: esRemoteControls,
    videoGuides: esVideoGuides,
    checkout: esCheckout,
    auxiliaryBed: esAuxiliaryBed,
    commonAreas: esCommonAreas,
    neighborhood: esNeighborhood,
    tourism: esTourism,
    gastronomy: esGastronomy,
    islands: esIslands,
    shopping: esShopping,
    emergency: esEmergency,
    inventory: esInventory,
    comeBack: esComeBack,
};

// `satisfies` makes the build fail when a language is missing a key that Spanish has.
const en = {
    translation: enTranslation,
    common: enCommon,
    metadata: enMetadata,
    navigation: enNavigation,
    photos: enPhotos,
    checkin: enCheckin,
    electricity: enElectricity,
    airConditioning: enAirConditioning,
    wifi: enWifi,
    houseRules: enHouseRules,
    remoteControls: enRemoteControls,
    videoGuides: enVideoGuides,
    checkout: enCheckout,
    auxiliaryBed: enAuxiliaryBed,
    commonAreas: enCommonAreas,
    neighborhood: enNeighborhood,
    tourism: enTourism,
    gastronomy: enGastronomy,
    islands: enIslands,
    shopping: enShopping,
    emergency: enEmergency,
    inventory: enInventory,
    comeBack: enComeBack,
} satisfies typeof es;

const fr = {
    translation: frTranslation,
    common: frCommon,
    metadata: frMetadata,
    navigation: frNavigation,
    photos: frPhotos,
    checkin: frCheckin,
    electricity: frElectricity,
    airConditioning: frAirConditioning,
    wifi: frWifi,
    houseRules: frHouseRules,
    remoteControls: frRemoteControls,
    videoGuides: frVideoGuides,
    checkout: frCheckout,
    auxiliaryBed: frAuxiliaryBed,
    commonAreas: frCommonAreas,
    neighborhood: frNeighborhood,
    tourism: frTourism,
    gastronomy: frGastronomy,
    islands: frIslands,
    shopping: frShopping,
    emergency: frEmergency,
    inventory: frInventory,
    comeBack: frComeBack,
} satisfies typeof es;

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { es, en, fr },
        defaultNS: "translation",
        fallbackLng: Language.Spanish,
        supportedLngs: Object.values(Language),
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        initAsync: false,
        interpolation: { escapeValue: false },
        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: "cartagena-lang",
            caches: ["localStorage"],
        },
    });
