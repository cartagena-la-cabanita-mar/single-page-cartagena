import { URL, fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createWifiVault } from "./scripts/wifiVault";

/** GitHub Pages serves the site from /single-page-cartagena/, so production builds need that base path. */
const PAGES_BASE_PATH = "/single-page-cartagena/";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
    // Variables without the VITE_ prefix stay on the build machine; only the encrypted vault reaches the browser.
    const env = loadEnv(mode, process.cwd(), "");
    const wifiVault =
        env.WIFI_UNLOCK_CODE && env.WIFI_PASSWORD
            ? createWifiVault(env.WIFI_UNLOCK_CODE, env.WIFI_PASSWORD)
            : undefined;

    return {
        base: command === "build" ? PAGES_BASE_PATH : "/",
        plugins: [react(), tailwindcss()],
        define: {
            "import.meta.env.WIFI_VAULT": JSON.stringify(wifiVault ? JSON.stringify(wifiVault) : ""),
        },
        server: {
            allowedHosts: [".devtunnels.ms", ".trycloudflare.com"],
        },
        preview: {
            allowedHosts: [".devtunnels.ms", ".trycloudflare.com"],
        },
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
    };
});
