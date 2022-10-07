import { useParams } from "react-router-dom"

export default function MovieSeatPage() {
    const {idSessao} = useParams()
    return(
        <p>movie seat page</p>
    )
}