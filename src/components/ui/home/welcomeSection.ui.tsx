import HeroUI from "@/components/ui/home/hero.ui";
import WelcomeInfoUI from "@/components/ui/home/welcomeInfo.ui";
import { SectionId } from "@/enums/navigation.enum";

export default function WelcomeSectionUI() {
    return (
        <section id={SectionId.Welcome} className="relative scroll-mt-14 bg-white lg:scroll-mt-0">
            <HeroUI />
            <div className="mx-auto max-w-6xl px-5 pt-8 pb-24 sm:px-8 lg:px-12 lg:pb-32">
                <WelcomeInfoUI />
            </div>
        </section>
    );
}
