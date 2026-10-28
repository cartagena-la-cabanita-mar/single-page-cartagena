import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
/** GitHub Pages serves the site from /single-page-cartagena/, so production builds need that base path. */
const PAGES_BASE_PATH = "/single-page-cartagena/";

export default defineConfig(({ command }) => ({
    base: command === "build" ? PAGES_BASE_PATH : "/",
    plugins: [react(), tailwindcss()],
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
}));
