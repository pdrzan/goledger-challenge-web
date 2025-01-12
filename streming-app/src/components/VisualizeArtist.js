import '../style/VisualizeArtist.css'
import Header from './Header';
import SubHeader from './SubHeader';
import Buttons from './Buttons';
import Paragraph from './Paragraph';
import { useSearchKey, deleteAsset } from '../api/api'
import ArtistImage from '../media/Artist image.png'


function VisualizeArtist() {
    const searchParams = new URLSearchParams(document.location.search);
    const key = searchParams.get('id');
    const dataArtist = useSearchKey(key);
    let done = false;
    let name, about;
    if (dataArtist) {
        const result = dataArtist.result[0];
        name = result['name'];
        about = result['about'];
        done = true;
    }
    if (done) {
        const deleteArtistButton = document.querySelector("button[form='deleteArtistButton']");
        if (deleteArtistButton && !deleteArtistButton.classList.contains('hasEventListener')) {
            deleteArtistButton.classList.add('hasEventListener');
            deleteArtistButton.addEventListener('click', async function (e) {
                e.preventDefault();
                deleteAsset(key);
                document.location.href = '/Artists';
            });
        }
        const updateArtistButton = document.querySelector("button[form='updateArtistVisualize']");
        if (updateArtistButton && !updateArtistButton.classList.contains('hasEventListener')) {
            updateArtistButton.classList.add('hasEventListener');
            updateArtistButton.addEventListener('click', async function (e) {
                e.preventDefault();
                document.location.pathname = '/UpdateArtist';
            });
        }
    }
    return (
        done ?
            <>
                {Header('artists')}
                <div className='main'>
                    {Buttons('VisualizeArtist')}
                    <div className='visualizeArtist'>
                        <img src={ArtistImage} alt="Michael Jackson"></img>
                        <div className='descriptionArtist'>
                            {SubHeader(name)}
                            {Paragraph("About", about)}
                        </div>
                    </div>
                </div>
            </>
            :
            <></>
    )
}

export default VisualizeArtist;