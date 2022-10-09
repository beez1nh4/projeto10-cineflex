import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import NavBar from "./NavBar"
import MovieChoicePage from "../pages/MovieChoicePage"
import MovieSeatPage from "../pages/MovieSeatPage"
import MovieSessionPage from "../pages/MovieSessionPage"
import SuccessPage from "../pages/SuccessPage"
import { useState } from "react"

export default function App() {
    const [request, setRequest] = useState({})
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<MovieChoicePage setRequest={setRequest}/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSessionPage/>}/>
            <Route path="/assentos/:idSessao" element={<MovieSeatPage request={request} setRequest={setRequest}/>}/>
            <Route path="/sucesso" element={<SuccessPage request={request} setRequest={setRequest}/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}