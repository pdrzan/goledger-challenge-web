import Button from "./Button"
import '../style/Buttons.css'

function Buttons(page) {
    switch (page) {
        case 'Artists':
            return (
                <div className="buttons">
                    <a href='/CreateArtist'>
                        {Button('New artist', 'newArtistButton')}
                    </a>
                </div>
            )
        case 'CreateArtist':
            return (
                <div className="buttons">
                    {Button('Create artist', 'createArtistForm', 'submit')}
                </div>
            )
        default:
            return <></>
    }
}

export default Buttons;