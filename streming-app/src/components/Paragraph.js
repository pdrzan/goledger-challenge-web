import '../style/Paragraph.css'

function Paragraph(title, text)
{
    return (
        <div class='paragraph'>
            <div class='titleParagraph'>
                {title}
            </div>
            {text}
        </div>
    )
}

export default Paragraph;