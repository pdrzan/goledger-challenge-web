import artistImage from '../media/Artist image.png'
import '../style/Artist.css'

function Artist(artist)
{
    return(
        <div className='artist'>
            <img className='artistImg' src={artistImage}></img>
            <a href='#'>{artist.name}</a>
        </div>
    )
}

export default Artist;