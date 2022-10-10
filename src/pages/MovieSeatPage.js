import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Seat from "../components/Seat"
import Subtitle from "../components/Subtitle"
import SelectForm from "../components/SelectForm"
import { useNavigate } from "react-router-dom"

export default function MovieSeatPage({request, setRequest, setAllowNavigate}) {
    setAllowNavigate(true)
    const {idSessao} = useParams()
    const [seats, setSeats] = useState([])
    const [session, setSession] = useState({})
    const [ids, setIds] = useState([])
    const [name, setName] = useState("")
    const [seatNameArray, setSeatNameArray] = useState([])
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate()
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
            weekday: res.data.day.weekday,
            date: res.data.day.date
        })
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])
    function verifyRequest(){
        if (ids.length ===0){
            alert("Você precisa escolher pelo menos 1 assento")
            return false
        }
        if (name ==="" || name === undefined){
            alert("Você precisa colocar um nome!")
            return false
        } if (cpf.length !== 11){
            alert("Você precisa inserir um cpf válido")
            return false
        } else{
            return true
        }
    }
    function finishRequest(){
        if (verifyRequest())
        {setRequest(
            {
                ids: seatNameArray,
                name: name,
                cpf: cpf,
                title: session.title, 
                posterURL: session.posterURL,
                time: session.time, 
                date: session.date
            }
        )
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promise = axios.post(URL, {
                ids: ids,
                name: name,
                cpf: cpf
            })
        promise.then(() => {
            navigate("/sucesso")
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })}
    }
    
    return(
        <>
        <SeatPageContainer>
            <p>Selecione o(s) assento(s)</p>
            <Seats>
                {seats.map((seat) => <Seat key={seat.id} seat={seat} ids={ids} setIds={setIds} seatNameArray={seatNameArray} setSeatNameArray={setSeatNameArray}></Seat>)}
            </Seats>
            <Subtitle/>
            <SelectForm name={name} setName={setName} cpf={cpf} setCpf={setCpf}></SelectForm>
            <ButtonSubmit data-identifier="reservation-btn" onClick={finishRequest}>Reservar assento(s)</ButtonSubmit> 
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
const ButtonSubmit = styled.button`
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    &:hover {
    border: 3px solid #26abff;
    cursor: pointer;
  }
`