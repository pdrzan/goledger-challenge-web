import '../style/CreateArtist.css'
import Buttons from './Buttons';
import Header from './Header';
import SubHeader from './SubHeader';
import InputText from './InputText';

const CreateArtist = function CreateArtist() {
    const createArtist = document.getElementsByClassName('createArtistForm')[0];
    console.log(createArtist);
    if (createArtist && !createArtist.classList.contains('hasEventListener')) {
        createArtist.classList.add('hasEventListener');
        createArtist.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(createArtist).entries()
            console.log(formData);
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