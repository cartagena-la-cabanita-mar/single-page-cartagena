export interface WifiVault {
    salt: string;
    iv: string;
    data: string;
    iterations: number;
}
