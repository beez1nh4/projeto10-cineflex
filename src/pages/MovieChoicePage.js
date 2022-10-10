import React from "react"
import styled from "styled-components"
import Movie from "../components/Movie"
import axios from "axios"
import {useState, useEffect} from "react"

export default function MovieChoicePage({setRequest, setAllowNavigate}) {
    setAllowNavigate(false)
    const [arrayMovies, setArrayMovies] = useState([])
    useEffect(()=> {const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const promise = axios.get(URL)
    promise.then((res) =>{
        setArrayMovies(res.data)
    })
    promise.catch((err)=> {
        console.log("erro! =>", err.response.data)
    })}, [])
    
    return(
        <>
        <MovieChoiceContainer>
            <p>Selecione o filme</p>
            <Movies>
                {arrayMovies.map((movie) => <Movie key={movie.id} id={movie.id} alt={movie.title} img={movie.posterURL}></Movie>)}
            </Movies>
        </MovieChoiceContainer>
        </>
    )
}

const MovieChoiceContainer = styled.div`
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
const Movies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`