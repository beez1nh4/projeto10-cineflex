import styled from "styled-components"
import Movie from "../components/Movie"
export default function MovieChoicePage() {
    return(
        <>
        <MovieChoiceContainer>
            <p>Selecione o filme</p>
            <Movies>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </Movies>
        </MovieChoiceContainer>
        </>
    )
}

const MovieChoiceContainer = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-top: 39px;
        margin-bottom: 39px;
    }
`
const Movies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`