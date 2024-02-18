import src from '../../assets/chairs.jpg';

export function GalleryItem(props){
    const { name , adress , price , img , className } = props;

    return (
        <div className={`${className?className:''} gallery__item col4`}>
            <div className="gallery__img radius3 overflow-hidden mb4">
                <img src={img} alt="" />
            </div>

            <div className="gallery__details">
                <h3 className="title text-cyan fs5 mb2">{name}</h3>
                <p className="address fs3 text-pale-blue mb2">{adress}</p>
                <p className="price fw400 fs3"><span className='fw700 fs4'>{price}</span> / hari</p>

            </div>
        </div>
    )
}