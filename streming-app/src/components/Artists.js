import Header from './Header'
import Artist from './Artist'
import Buttons from './Buttons'
import '../style/Artists.css'
import { useSearch } from '../api/api'

function Artists() {
    let dataArtists = useSearch("artist");
    let artists = [];
    let done = false;
    if (dataArtists) {
        dataArtists.result.forEach(artist => {
            artists.push(Artist(artist));
        });
        done = true;
    }
    return (
        done ?
            <>
                {Header('artists')}
                <div className='main'>
                    {Buttons('Artists')}
                    <div className='artists'>
                        {artists}
                    </div>
                </div>
            </>
            :
            <></>
    );
}



export default Artists;