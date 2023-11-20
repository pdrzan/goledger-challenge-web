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
        case 'VisualizeArtist':
            return (
                <div className="buttons">
                    <a href='/CreateArtist'>
                        {Button('New artist', 'newArtistButton')}
                    </a>
                    {Button('Delete artist', 'deleteArtistButton')}
                    {Button('Update artist', 'updateArtistVisualize')}
                </div>
            )
        case 'updateArtist':
            return (
                <div className="buttons">
                    {Button('Update artist', 'updateArtistForm', 'submit')}
                </div>
            )
        default:
            return <></>
    }
}

export default Buttons;