import '../style/CreateArtist.css'
import Buttons from './Buttons';
import Header from './Header';
import SubHeader from './SubHeader';
import InputText from './InputText';
import { createAsset } from '../api/api';

function CreateArtist() {
    const createArtist = document.getElementsByClassName('createArtistForm')[0];
    if (createArtist && !createArtist.classList.contains('hasEventListener')) {
        createArtist.classList.add('hasEventListener');
        createArtist.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(createArtist)
            const values = [...formData.entries()];
            if (values['Name'] !== '' && values['About'] !== '') {
                const asset = {
                    "@assetType": "artist",
                    "name": values[0][1],
                    "about": values[1][1]
                }
                createAsset(asset);
                window.location.pathname = '/Artists'
            }
        });
    }
    return (
        <>
            {Header('artists')}
            <div className='main'>
                {Buttons('CreateArtist')}
                <div className='createArtist'>
                    {SubHeader('Create Artist')}
                    <form action="" className='createArtistForm' id='createArtistForm'>
                        {InputText('Name', 'createArtistForm')}
                        {InputText('About', 'createArtistForm')}
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateArtist;