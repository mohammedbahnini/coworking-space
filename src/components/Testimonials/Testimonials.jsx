import { Quote } from "./Quote";
import { Testimonial } from "./Testimonial";
import dots from '../../assets/dots.svg';

export function Testimonials() {
    return (
        <section className="testimonials   mt37 ">
            <div className="container flex jc-space-between py37 relative  ">

                <Quote />
                <Testimonial />

                <div className="absolute w50vw h100pr top1 right50pr bg-pale-red z-1"></div>

                <div className="img--dots absolute left0 top45 z-1">
                    <img src={dots} alt="" />
                </div>
            </div>
        </section>
    )
}