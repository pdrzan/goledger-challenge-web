import Button from "./Button"
import '../style/Buttons.css'

function Buttons(page)
{
    switch(page)
    {
        case 'Artists':
            return(
                <div className="buttons">
                    {Button('New artist')}
                </div>
            )
        default:
            return <></>
    }
}

export default Buttons;