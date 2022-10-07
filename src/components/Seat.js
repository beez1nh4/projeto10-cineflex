import styled from "styled-components"

export default function Seat({seat}) {
    return(
        <>
        <ButtonSeat>{seat.name}</ButtonSeat>
        </>     
    )
}

const ButtonSeat = styled.button`
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;

`