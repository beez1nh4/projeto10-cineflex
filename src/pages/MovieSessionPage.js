import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Session from "../components/Session"

export default function MovieSessionPage() {
    const {idFilme} = useParams()
    const [session, setSession] = useState({})
    const [days, setDays] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promise.then((res) => {
          setSession(res.data)
          setDays(res.data.days)
          console.log(res.data.days)
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])
    return(
        <>
        <SessionPageContainer>
            <p>Selecione o horário</p>
            <Sessions>
                {days.map((day)=> <Session key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}></Session>)}
            </Sessions>
        </SessionPageContainer>
        <Footer></Footer>
        </>
    )
}

const SessionPageContainer = styled.div`
    margin-top: 67px;
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
const Sessions = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`