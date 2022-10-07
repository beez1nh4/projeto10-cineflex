import { useParams } from "react-router-dom"

export default function MovieSessionPage() {
    const {idFilme} = useParams()

    return(
        <p>movie session page</p>
    )
}