import { GalleryItem } from "./GalleryItem";
import place1 from '../../assets/chairs.jpg';
import place2 from '../../assets/room.jpg';
import place3 from '../../assets/studio.png';
import place4 from '../../assets/sofa.jpg';
import place5 from '../../assets/office.png';
import place6 from '../../assets/couch.jpg';



export function Gallery() {
    const places = 
    [
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place1
        } 
        ,
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place2
        }
        ,
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place3
        }
        ,
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place4
        }
        ,
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place5
        }
        ,
        {
            name : 'Summer Tower' , 
            adress : 'Jl. Lorem Ipsum no.62, Wakanda Universe' , 
            price : 'Rp 150.000' , 
            img : place6
        }
    ]
    return (
        <section className="gallery mt37">
            <div className="container">
                <h1 className="gallery__title fs8 fw700 mb15">Ruang Kerja di dekatmu</h1>
                <div className="gallery__list grid col-gap10 row-gap20">
                    {
                        places.map( ({name , adress, price , img } , i) =>{
                            return (<GalleryItem name={name} adress={adress} price={price} img={img} key={i} />)
                        })
                    }
                </div>
            </div>
        </section>
    )
}