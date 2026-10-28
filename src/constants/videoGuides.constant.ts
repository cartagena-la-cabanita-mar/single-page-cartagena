import { VideoGuideId } from "@/enums/videoGuides.enum";
import type { VideoGuide } from "@/interfaces/videoGuides.interface";

const VIDEOS_PATH = `${import.meta.env.BASE_URL}videos/`;

/** The "#t=0.1" fragment makes browsers paint the first frame as a poster. */
export const VIDEO_GUIDES: Array<VideoGuide> = [
    { id: VideoGuideId.AirRemote, src: `${VIDEOS_PATH}control-aire.mp4#t=0.1` },
    { id: VideoGuideId.FanRemote, src: `${VIDEOS_PATH}control-ventilador.mp4#t=0.1` },
    { id: VideoGuideId.Cooktop, src: `${VIDEOS_PATH}placas.mp4#t=0.1` },
    { id: VideoGuideId.CooktopUnlock, src: `${VIDEOS_PATH}placas-desbloqueadas.mp4#t=0.1` },
];
