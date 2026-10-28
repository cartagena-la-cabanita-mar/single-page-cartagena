import { VideoGuideId } from "@/enums/videoGuides.enum";
import type { VideoGuide } from "@/interfaces/videoGuides.interface";

/** The "#t=0.1" fragment makes browsers paint the first frame as a poster. */
export const VIDEO_GUIDES: Array<VideoGuide> = [
    { id: VideoGuideId.AirRemote, src: "/videos/control-aire.mp4#t=0.1" },
    { id: VideoGuideId.FanRemote, src: "/videos/control-ventilador.mp4#t=0.1" },
    { id: VideoGuideId.Cooktop, src: "/videos/placas.mp4#t=0.1" },
    { id: VideoGuideId.CooktopUnlock, src: "/videos/placas-desbloqueadas.mp4#t=0.1" },
];
