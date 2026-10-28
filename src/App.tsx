import { MotionConfig, useReducedMotion } from "motion/react";
import { ReactLenis } from "lenis/react";
import BoatCursorUI from "@/components/ui/commons/boatCursor.ui";
import HomeViewUI from "@/components/ui/home/homeView.ui";

export default function App() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <MotionConfig reducedMotion="user">
            <ReactLenis root options={{ lerp: 0.09, wheelMultiplier: 0.9, smoothWheel: !shouldReduceMotion }} />
            <HomeViewUI />
            <BoatCursorUI />
        </MotionConfig>
    );
}
