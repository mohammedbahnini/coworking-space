import { FeaturesList } from "./FeaturesList";
import { Stats } from "./Stats";
import dots from '../../assets/dots.svg';

export function Features() {
    return (
        <section className="features mt37">
            <div className="container relative">
                <div className="flex ai-end jc-space-between py37 ">
                    <Stats />
                    <FeaturesList />

                    <div className="absolute w50vw h100pr top1 left50pr bg-pale-cyan z-1"></div>

                    <div className="img--dots absolute left0 top30 z-1">
                        <img src={dots} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}