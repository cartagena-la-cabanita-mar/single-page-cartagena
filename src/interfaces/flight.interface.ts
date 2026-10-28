export interface Point {
    x: number;
    y: number;
}

export interface FlightPath {
    start: Point;
    controlA: Point;
    controlB: Point;
    end: Point;
}

export interface FlightPoint extends Point {
    /** Heading of the plane in degrees, following the curve. */
    angle: number;
}
