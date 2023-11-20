import '../style/InputText.css'

function InputText(inputTitle, form='')
{
    return(
        <div className='inputText'>
            <div className='title'>{inputTitle}</div>
            <input name={inputTitle} type='text' form={form}></input>
        </div>
    )
}

export default InputText;