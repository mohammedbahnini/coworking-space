import separator from '../../assets/separator.svg';
import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';
import avatar3 from '../../assets/avatar-3.png';
import avatar4 from '../../assets/avatar-4.png';
import avatar5 from '../../assets/avatar-5.png';


export function Testimonial() {
    const avatars =
        [
            { img: avatar1 },
            { img: avatar2 },
            { img: avatar3 },
            { img: avatar4 },
            { img: avatar5 }
        ];

    return (
        <div className="testimonial w102">

            <div className="testimonial__title align-center mb7" >
                <h3 className="fs7 fw600">Help us improve our productivity</h3>
            </div>

            <div className="testimonial__text mb8">
                <p className="align-center text-grayish-blue" style={{ lineHeight: '2em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="testimonial__indicator flex ai-start mb10">
                <img src={separator} alt="" />
            </div>

            <div className="testimonial__avatrs flex ai-center col-gap8 mb8">
                <div className="avatar w8" style={{opacity : '0.5'}} >
                    <img src={avatar1} alt="" />
                </div>
                <div className="avatar w12" style={{opacity : '0.5'}} >
                    <img src={avatar2} alt="" />
                </div>
                <div className="avatar w17" >
                    <img src={avatar3} alt="" />
                </div>
                <div className="avatar w12" style={{opacity : '0.5'}} >
                    <img src={avatar4} alt="" />
                </div>
                <div className="avatar w8" style={{opacity : '0.5'}} >
                    <img src={avatar5} alt="" />
                </div>
            </div>

            <div className="testimonial__owner align-center flex flex-col row-gap2">
                <div className="name fw700">Samantha William</div>
                <div className="role text-pale-blue">Senior Designer at Design Studio</div>
            </div>
        </div>
    )
}