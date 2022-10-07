import { useParams } from "react-router-dom"
import Footer from "../components/Footer"

export default function MovieSessionPage() {
    const {idFilme} = useParams()

    return(
        <>
        <p>movie session page</p>
        <Footer></Footer>
        </>
    )
}