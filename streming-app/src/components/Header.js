import logo from '../media/Logo.png'
import '../style/Header.css'

function Header(linkActive)
{
    return(
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="Logo"></img>
            </div>
            <div className="links">
                <a href="#" className={linkActive === 'songs' ? 'active' : ''}>Songs</a>
                <a href="#" className={linkActive === 'albums' ? 'active' : ''}>Albums</a>
                <a href="/Artists" className={linkActive === 'artists' ? 'active' : ''}>Artists</a>
                <a href="#" className={linkActive === 'playlist' ? 'active' : ''}>Playlist</a>
            </div>
        </header>
    )
}

export default Header;