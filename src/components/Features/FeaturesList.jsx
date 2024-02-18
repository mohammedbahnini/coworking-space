import { Feature } from "./Feature";

export function FeaturesList(props) {
    const { className } = props;
    const features = [
        {
            title: 'Reservasi Mudah',
            caption: 'Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.',
            icon: <i className="fa-regular fa-calendar-check"></i>
        }
        ,
        {
            title: 'Waktu yang Fleksibel',
            caption: 'Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.',
            icon: <i className="fa-regular fa-clock"></i>
        }
        ,
        {
            title: 'Kustomisasi Ruang',
            caption: 'Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.',
            icon: <i className="fa-solid fa-house"></i>
        }
    ];


    return (
        <div className={`${className ? className : ''} features__list w100 flex flex-col row-gap23 `} >
            {
                features.map(feature => {
                    return (
                        <Feature title={feature.title} caption={feature.caption} icon={feature.icon} key={feature.title} />
                    )
                })
            }
        </div>
    )
}