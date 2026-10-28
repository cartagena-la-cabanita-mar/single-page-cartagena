import type { WifiVault } from "@/interfaces/wifi.interface";

function isWifiVault(value: unknown): value is WifiVault {
    return (
        typeof value === "object" &&
        value !== null &&
        "salt" in value &&
        typeof value.salt === "string" &&
        "iv" in value &&
        typeof value.iv === "string" &&
        "data" in value &&
        typeof value.data === "string" &&
        "iterations" in value &&
        typeof value.iterations === "number"
    );
}

/** Reads the encrypted vault that the build embeds; returns undefined when the build had no secrets configured. */
export function parseWifiVault(raw: string): WifiVault | undefined {
    if (!raw) {
        return undefined;
    }

    const parsed: unknown = JSON.parse(raw);
    return isWifiVault(parsed) ? parsed : undefined;
}

function fromBase64(value: string): Uint8Array<ArrayBuffer> {
    return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

/** Decrypts the Wi-Fi password with the access code. Returns undefined when the code is wrong. */
export async function decryptWifiPassword(code: string, vault: WifiVault): Promise<string | undefined> {
    const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, [
        "deriveKey",
    ]);
    const key = await crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: fromBase64(vault.salt), iterations: vault.iterations, hash: "SHA-256" },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"],
    );

    try {
        const plain = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: fromBase64(vault.iv) },
            key,
            fromBase64(vault.data),
        );
        return new TextDecoder().decode(plain);
    } catch {
        return undefined;
    }
}
