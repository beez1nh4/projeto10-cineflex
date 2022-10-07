import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import MovieChoicePage from "../pages/MovieChoicePage"
import MovieSeatPage from "../pages/MovieSeatPage"
import MovieSessionPage from "../pages/MovieSessionPage"
import SuccessPage from "../pages/SuccessPage"
import Footer from "./Footer"

export default function App() {
    return (
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<MovieChoicePage/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSessionPage/>}/>
            <Route path="/assentos/:idSessao" element={<MovieSeatPage/>}/>
            <Route path="/sucesso" element={<SuccessPage/>}/>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    )
}