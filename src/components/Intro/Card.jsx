// import src from  '../../assets/man-talking-on-phone.jpg';
export function Card(props){
    const { title , price , src , className }= props;

    return (
        <div className={`card w80 h118 relative radius3 overflow-hidden ${className ? className : ''}`}>
            <img src={src} alt="" className='car__img h100pr object-fit-cover' />
            
            <div className="card__caption absolute bg-white bottom0 left0 pt5 pr5" style={ { borderTopRightRadius : '0.75rem'}}>
                <div className="card__title">
                    <span className='text-cyan fw700'>{title}</span>
                </div>
                <div className="card__price text-plae-blue">
                    <span>{price}</span>
                </div>
            </div>
        </div>  
    )
}