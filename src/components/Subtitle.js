import styled from "styled-components"

export default function Subtitle() {
    const subtitles = [
        {id:0, color:"#1AAE9E", meaning: "Selecionado", border: "#0E7D71", dataIdentifier: "seat-selected-subtitle"},
        {id:1, color:"#C3CFD9;", meaning: "Disponível", border: "#7B8B99", dataIdentifier: "seat-available-subtitle"},
        {id: 2, color:"#FBE192", meaning: "Indisponível", border: "#F7C52B", dataIdentifier: "seat-unavailable-subtitle"}
    ]
    return(
        <>
            <Subtitles>
                {subtitles.map((item) => <SubtitleItem key={item.id}color={item.color} meaning={item.meaning} border={item.border} dataIdentifier={item.dataIdentifier}></SubtitleItem>)}
            </Subtitles>
            
        </>
    )
}
function SubtitleItem({color, meaning, border, dataIdentifier}){
    return(
        <>
            <SubtitleElement data-identifier={dataIdentifier}>
                <Ball color={color} border={border}></Ball>
                <TextSubtitle>{meaning}</TextSubtitle>
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
`
const TextSubtitle = styled.div`
        margin-top: 7px;
        font-size: 13px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
`

const Ball = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 17px;
`