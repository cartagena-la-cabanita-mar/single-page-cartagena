export const FLIGHT_SECONDS = 3;
export const FLIGHT_PAUSE_SECONDS = 2.4;
export const FLIGHT_LOOP_SECONDS = FLIGHT_SECONDS + FLIGHT_PAUSE_SECONDS;

/** Moment of the loop (0 to 1) when the plane touches down and the target reacts. */
export const FLIGHT_ARRIVAL = FLIGHT_SECONDS / FLIGHT_LOOP_SECONDS;

export const FLIGHT_SAMPLE_COUNT = 24;
