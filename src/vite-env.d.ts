/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** JSON of the encrypted Wi-Fi password, built from WIFI_UNLOCK_CODE and WIFI_PASSWORD in `.env`. Empty when unset. */
    readonly WIFI_VAULT: string;
}
