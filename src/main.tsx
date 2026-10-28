import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/config.ts";
import "./styles.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
