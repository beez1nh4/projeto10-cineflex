import styled from "styled-components"

export default function Subtitle() {
    const subtitles = [
        {color:"#1AAE9E", meaning: "Selecionado", border: "#0E7D71"},
        {color:"#C3CFD9;", meaning: "Disponível", border: "#7B8B99"},
        {color:"#FBE192", meaning: "Indisponível", border: "#F7C52B"}
    ]
    return(
        <>
            <Subtitles>
                {subtitles.map((item) => <SubtitleItem color={item.color} meaning={item.meaning} border={item.border}></SubtitleItem>)}
            </Subtitles>
            
        </>
    )
}
function SubtitleItem({color, meaning, border}){
    return(
        <>
            <SubtitleElement>
                <Ball color={color} border={border}></Ball>
                <p>{meaning}</p>
            </SubtitleElement>
        </>
    )
}

const Subtitles = styled.div`
    width: 60%;
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const SubtitleElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`
const Ball = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 17px;
`