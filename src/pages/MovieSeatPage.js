import { useParams } from "react-router-dom"
import Footer from "../components/Footer"

export default function MovieSeatPage() {
    const {idSessao} = useParams()
    return(
        <>
        <p>movie seat page</p>
        <Footer></Footer>
        </>
    )
}