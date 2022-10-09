import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate()
    function goHome(){
        navigate("/")
    }
    
    return (
        <NavBarElement onClick={goHome}>
            <p>CINEFLEX</p>
        </NavBarElement>
    )
}

const NavBarElement = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 100;
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
    &:hover {
    cursor: pointer;
    }
`