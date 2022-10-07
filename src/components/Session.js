import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Session({weekday, date, showtimes}) {
    return(
        <>
            <SessionContainer>
            <p>{weekday} - {date}</p>
            <Showtimes>
                {showtimes.map((time)=> <Showtime key={time.id} showtime={time.name}></Showtime>)}
            </Showtimes>
            </SessionContainer>
        </>
    )
}

function Showtime({showtime}){
    return(
        <ButtonShowtime>{showtime}</ButtonShowtime>
    )
}

const SessionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
`

const ButtonShowtime = styled.button`
    width: 83px;
    height: 43px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    border: 0;
    margin-right: 8px;
`
const Showtimes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`