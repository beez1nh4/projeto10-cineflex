import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movie({id, img, alt}) {
    return(
        <>
        <Link to={`sessoes/${id}`}>
            <MovieItem>
                <img src={img} alt={alt}></img>
            </MovieItem>
        </Link>
        </>
    )
}

const MovieItem = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
    & img{
        width: 129px;
        height: 193px;
    }
    &:hover {
    border: 3px solid #26abff;
  }
`