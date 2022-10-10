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
    const [allowNavigate, setAllowNavigate] = useState(false)
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <NavBar allowNavigate={allowNavigate}></NavBar>
        <Routes>
            <Route path="/" element={<MovieChoicePage setRequest={setRequest} setAllowNavigate={setAllowNavigate}/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSessionPage setAllowNavigate={setAllowNavigate}/>}/>
            <Route path="/assentos/:idSessao" element={<MovieSeatPage request={request} setRequest={setRequest} setAllowNavigate={setAllowNavigate}/>}/>
            <Route path="/sucesso" element={<SuccessPage request={request} setRequest={setRequest} setAllowNavigate={setAllowNavigate}/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}