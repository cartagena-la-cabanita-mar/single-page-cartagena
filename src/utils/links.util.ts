export function buildMapsSearchUrl(query: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function buildTelUrl(tel: string): string {
    return `tel:${tel}`;
}

export function buildWhatsappUrl(phone: string): string {
    return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
