import artistImage from '../media/Artist image.png'
import '../style/Artist.css'

function Artist(artist) {
    const pathname = '/VisualizeArtist?id=' + artist['@key'];
    return (
        <div className='artist'>
            <img className='artistImg' src={artistImage} alt="Artist"></img>
            <a href={pathname}>{artist.name.length > 0 ? artist.name : "Not found"}</a>
        </div>
    )
}

export default Artist;