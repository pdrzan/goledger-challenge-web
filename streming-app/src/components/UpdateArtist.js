import '../style/UpdateArtist.css'
import Buttons from './Buttons';
import Header from './Header';
import SubHeader from './SubHeader';
import InputText from './InputText';
import { updateAsset, useSearchKey } from '../api/api'

function UpdateArtist() {
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
    const updateArtist = document.getElementsByClassName('updateArtistForm')[0];
    if (updateArtist && !updateArtist.classList.contains('hasEventListener')) {
        updateArtist.classList.add('hasEventListener');
        updateArtist.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(updateArtist)
            const values = [...formData.entries()];
            if (values['Name'] !== '' && values['About'] !== '') {
                const asset = {
                    "@assetType": "artist",
                    "@key": key,
                    "name": values[0][1],
                    "about": values[1][1]
                }
                updateAsset(asset);
                window.location.pathname = '/Artists'
            }
        });
    }
    return (
        done ?
            <>
                {Header('artists')}
                <div className='main'>
                    {Buttons('updateArtist')}
                    <div className='updateArtist'>
                        {SubHeader('Update Artist: ' + name)}
                        <form action="" className='updateArtistForm' id='updateArtistForm'>
                            {InputText('About', 'updateArtistForm', about)}
                        </form>
                    </div>
                </div>
            </>
            :
            <></>
    )
}

export default UpdateArtist;