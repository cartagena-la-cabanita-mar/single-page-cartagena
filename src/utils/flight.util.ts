import { FLIGHT_SAMPLE_COUNT } from "@/constants/flight.constant";
import type { FlightPath, FlightPoint } from "@/interfaces/flight.interface";

export function toSvgPath({ start, controlA, controlB, end }: FlightPath): string {
    return `M${start.x} ${start.y} C${controlA.x} ${controlA.y}, ${controlB.x} ${controlB.y}, ${end.x} ${end.y}`;
}

/**
 * Samples a cubic Bézier curve into evenly spaced points, each with the heading of the curve at that point,
 * so a plane can follow it as keyframes.
 */
export function sampleFlight({ start, controlA, controlB, end }: FlightPath): Array<FlightPoint> {
    return Array.from({ length: FLIGHT_SAMPLE_COUNT + 1 }, (_, step) => {
        const t = step / FLIGHT_SAMPLE_COUNT;
        const u = 1 - t;
        const x = u ** 3 * start.x + 3 * u ** 2 * t * controlA.x + 3 * u * t ** 2 * controlB.x + t ** 3 * end.x;
        const y = u ** 3 * start.y + 3 * u ** 2 * t * controlA.y + 3 * u * t ** 2 * controlB.y + t ** 3 * end.y;
        const slopeX =
            3 * u ** 2 * (controlA.x - start.x) +
            6 * u * t * (controlB.x - controlA.x) +
            3 * t ** 2 * (end.x - controlB.x);
        const slopeY =
            3 * u ** 2 * (controlA.y - start.y) +
            6 * u * t * (controlB.y - controlA.y) +
            3 * t ** 2 * (end.y - controlB.y);

        return { x, y, angle: (Math.atan2(slopeY, slopeX) * 180) / Math.PI };
    });
}
