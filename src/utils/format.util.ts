/** Formats minutes in the reader's language, e.g. "10 min". */
export function formatMinutes(minutes: number, locale: string): string {
    return new Intl.NumberFormat(locale, { style: "unit", unit: "minute", unitDisplay: "short" }).format(minutes);
}

/** Short weekday names (Monday first) in the reader's language. */
export function getWeekdayLabels(locale: string): Array<string> {
    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" });
    const firstMonday = Date.UTC(2024, 0, 1);
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    return Array.from({ length: 7 }, (_, index) =>
        formatter.format(new Date(firstMonday + index * oneDayInMilliseconds)),
    );
}

/** Formats a whole hour of the day in the reader's language, e.g. "8 a. m." or "8 AM". */
export function formatHour(hour: number, locale: string): string {
    return new Intl.DateTimeFormat(locale, { hour: "numeric", hour12: true, timeZone: "UTC" }).format(
        new Date(Date.UTC(2024, 0, 1, hour)),
    );
}
