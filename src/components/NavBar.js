import React from "react"
import styled from "styled-components"

export default function NavBar() {
    return (
        <NavBarElement>
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
`