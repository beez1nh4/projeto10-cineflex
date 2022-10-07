import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import NavBar from "./NavBar"
import MovieChoicePage from "../pages/MovieChoicePage"
import MovieSeatPage from "../pages/MovieSeatPage"
import MovieSessionPage from "../pages/MovieSessionPage"
import SuccessPage from "../pages/SuccessPage"

export default function App() {
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<MovieChoicePage/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSessionPage/>}/>
            <Route path="/assentos/:idSessao" element={<MovieSeatPage/>}/>
            <Route path="/sucesso" element={<SuccessPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}