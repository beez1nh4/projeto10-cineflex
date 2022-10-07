import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"

export default function MovieSeatPage() {
    const {idSessao} = useParams()
    const [info, setInfo] = useState({})
    const [session, setSession] = useState({})
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    
        promise.then((res) => {
          setInfo(res.data)
          //setDays(res.data.days)
          //console.log("res",res.data)
          //console.log("verificar",res.data.movie.posterURL)
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
        <p>movie seat page</p>
        <Footer session={session} isSession={true}></Footer>
        </>
    )
}