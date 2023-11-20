import '../style/InputText.css'

function InputText(inputTitle, form='', placeholder='')
{
    return(
        <div className='inputText'>
            <div className='title'>{inputTitle}</div>
            <input name={inputTitle} type='text' form={form} placeholder={placeholder}></input>
        </div>
    )
}

export default InputText;