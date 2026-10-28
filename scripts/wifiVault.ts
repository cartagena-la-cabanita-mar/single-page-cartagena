import { createCipheriv, pbkdf2Sync, randomBytes } from "node:crypto";

const PBKDF2_ITERATIONS = 250_000;
const KEY_BYTES = 32;
const SALT_BYTES = 16;
const IV_BYTES = 12;

export interface WifiVaultPayload {
    salt: string;
    iv: string;
    data: string;
    iterations: number;
}

/**
 * Encrypts the Wi-Fi password with a key derived from the access code (PBKDF2 + AES-256-GCM), so the site never ships
 * the password or the code in plain text. The browser decrypts it with the code the guest types.
 */
export function createWifiVault(code: string, password: string): WifiVaultPayload {
    const salt = randomBytes(SALT_BYTES);
    const iv = randomBytes(IV_BYTES);
    const key = pbkdf2Sync(code, salt, PBKDF2_ITERATIONS, KEY_BYTES, "sha256");
    const cipher = createCipheriv("aes-256-gcm", key, iv);
    const encrypted = Buffer.concat([cipher.update(password, "utf8"), cipher.final()]);
    const data = Buffer.concat([encrypted, cipher.getAuthTag()]);

    return {
        salt: salt.toString("base64"),
        iv: iv.toString("base64"),
        data: data.toString("base64"),
        iterations: PBKDF2_ITERATIONS,
    };
}
