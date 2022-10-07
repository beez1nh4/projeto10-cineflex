import styled from "styled-components"
import {useState, useEffect} from "react"

export default function Seat({seat, ids, setIds}) {
    console.log(seat)
    const subtitles = [
        {id:0, color:"#1AAE9E", meaning: "Selecionado", border: "#0E7D71"},
        {id:1, color:"#C3CFD9;", meaning: "Disponível", border: "#7B8B99"},
        {id: 2, color:"#FBE192", meaning: "Indisponível", border: "#F7C52B"}
    ]
    const [color, setColor] = useState(subtitles[1].color)
    const [border, setBorder] = useState(subtitles[1].border)
    let seatNumber = seat.name;
    useEffect(() => {
    if (!seat.isAvailable){
        setColor(subtitles[2].color)
        setBorder(subtitles[2].border)
    }}, [])
    if (seat.name < 10){
        seatNumber = "0"+seat.name
    }

    function deleteItem(id){
        const newIds = ids.filter((idInArray) => idInArray !== id)
        setIds(newIds)
    }
    function chooseSeat(){
        if(!seat.isAvailable){
            alert("Esse assento não está disponível")
        } if(seat.isAvailable && ids.includes(seat.id)){
            setColor(subtitles[1].color)
            setBorder(subtitles[1].border)
            deleteItem(seat.id)
        }if(seat.isAvailable && !ids.includes(seat.id)){
            setColor(subtitles[0].color)
            setBorder(subtitles[0].border)
            setIds([...ids, seat.id])
        }
    }
    
    return(
        <>
        <ButtonSeat onClick={chooseSeat} color={color} border={border} >{seatNumber}</ButtonSeat>
        </>     
    )
}

const ButtonSeat = styled.button`
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 12px;

`