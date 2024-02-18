import logo from '../../assets/logo.svg';

export function Navbar(){
    return (
        <nav className='pt13'>
            <div className="container flex  ai-center ">

                <a href="#" className="logo w8 block">
                    <img src={logo} alt="logo" />
                </a>
                
                <ul className="flex mx10 col-gap10 flex1">
                    <li>
                        <a href="#" className='text-black hover-text-cyan'>Temukan Lokasi</a>
                    </li>
                    <li>
                        <a href="#" className='text-black hover-text-cyan'>Jenis Ruang</a>
                    </li>
                    <li>
                        <a href="#" className='text-black hover-text-cyan'>Komunitas</a>
                    </li><li>
                        <a href="#" className='text-black hover-text-cyan'>Blog</a>
                    </li>
                </ul>

                <ul className="flex col-gap10">
                    <li>
                        <a href="#" className='text-black hover-text-cyan'>Untuk Startup</a>
                    </li>
                    <li>
                        <a href="#" className='text-black hover-text-cyan'>Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}