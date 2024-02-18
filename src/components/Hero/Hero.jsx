import src from  '../../assets/girl-working-on-laptop.jpg';
import dots from '../../assets/dots.svg';

export function Hero() {
    return (
        <section className="hero mt12 ">
            <div className="container pt27 pb51 relative ">

                <div className="w47pr tablet-w80pr">

                    <div className="hero__headings  mb15 ">
                        <h1 className="fs14">Temukan Ruang</h1>
                        <h1 className="fs14">Kerja Dimanapun</h1>
                    </div>

                    <div className="hero__controls flex jc-space-between bg-white radius3 p7 tablet-w65pr" style={{ boxShadow : "0px 20px 30px rgba(64, 72, 82, 0.1)" }}>
                        <div className="dropdown flex flex-col ">
                            <span className="dropdown__label text-plae-blue mb2">Temukan ruang kerja di</span>
                            <div className="dropdown__content fs7 fw600 flex col-gap8 ai-center">
                            Jakarta 
                            <span className="carret inline-block fs4 mb-2"><i className="fa-solid fa-angle-down"></i></span>
                            </div>
                        </div>
                        <div className="btn radius3 bg-orange text-white py6 px11" >Cari Sekarang</div>
                    </div>

                </div>

                <div className="absolute top0 z-1 right10 bottom0 w80pr radius3 overflow-hidden ">
                    <img src={src} alt="" className='h100pr object-fit-cover' />
                </div>

                <div className="img--dots absolute left0 bottom38 z-1">
                    <img src={dots} alt="" />
                </div>

            </div>
        </section>
    )
}