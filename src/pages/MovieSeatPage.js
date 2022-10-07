import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Seat from "../components/Seat"
import Subtitle from "../components/Subtitle"

export default function MovieSeatPage() {
    const {idSessao} = useParams()
    const [seats, setSeats] = useState([])
    const [session, setSession] = useState({})
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    
        promise.then((res) => {
          setSeats(res.data.seats)
          //setDays(res.data.days)
          //console.log("res",res.data)
          //console.log("verificar",res.data.seats)
          setSession({
            title: res.data.movie.title, 
            posterURL: res.data.movie.posterURL,
            time: res.data.name, 
            weekday: res.data.day.weekday})
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])
    return(
        <>
        <SeatPageContainer>
            <p>Selecione o(s) assento(s)</p>
            <Seats>
                {seats.map((seat) => <Seat key={seat.id} seat={seat}></Seat>)}
            </Seats>
            <Subtitle/>
        </SeatPageContainer>
        <Footer session={session} isSession={true}></Footer>
        </>
    )
}

const SeatPageContainer = styled.div`
    margin-top: 67px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 147px;
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
const Seats = styled.div`
    width: 330px;
    height: 177px;
    margin-right: -7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`