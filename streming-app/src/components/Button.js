import '../style/Button.css'

function Button(textButton, form, type='')
{
    return(
        <button className='button' form={form} type={type}>{textButton}</button>
    )
}

export default Button;