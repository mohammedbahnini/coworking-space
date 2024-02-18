import { Card } from "./Card";
import img1 from '../../assets/girl-on-couch.jpg';
import img2 from '../../assets/man-reading-on-laptop.jpg';
import img3 from '../../assets/man-talking-on-phone.jpg';
import img4 from '../../assets/man-next-to-window.png';
import img5 from '../../assets/women-wearing-glasses.jpg';


export function Intro() {
    const cards = [
        {
            title: 'Clean Simple',
            price: '12 Lokasi',
            src: img1
        },
        {
            title: 'Clean Simple',
            price: '12 Lokasi',
            src: img2
        },
        {
            title: 'Clean Simple',
            price: '12 Lokasi',
            src: img3
        },
        {
            title: 'Clean Simple',
            price: '12 Lokasi',
            src: img4
        },
        {
            title: 'Clean Simple',
            price: '12 Lokasi',
            src: img5
        }
    ]
    return (
        <section className="intro mt37  ">
            <div className="container">
                <div className="intro__head">
                    <div className="flex col-gap56">

                        <div className="flex flex-col row-gap4 w57 min-w75">
                            <h2 className="fs7 fw700">Pilih Ruang Kerja</h2>
                            <h2 className="fs7 fw700">Sesuai Keinginanmu</h2>
                        </div>

                        <div className="flex flex-col row-gap2">
                            <p className="text-text-grayish-blue mb1">
                                Kami yakin kamu akan menemukan ruang kerja yang sesuai dengan keinginan dan seleramu.
                            </p>
                            <p className="text-text-grayish-blue mb1">
                                keinginan dan seleramu. Kami memastikan kamu akan nyaman.
                            </p>
                            <p className="text-cyan fw700">
                                Lihat semua jenis ruang kerja
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mt15 max-w100pr intro__cards h118 relative overflow-hidden ">
                <div className="cards flex col-gap10 childs-shrink-0 absolute left50pr   " style={{ transform: 'translate(-50%)' }}>
                    {
                        cards.map( (card ,i ) => {
                            return (<Card title={card.title} price={card.price} src={card.src} key={i}  />)
                        })
                    }
                </div>
            </div>

        </section>
    )
}