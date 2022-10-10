import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function NavBar({allowNavigate}) {
    const navigate = useNavigate()
    function goHome(){
        navigate("/")
    }
    function returnPage(){
        navigate(-1)
    }
    return (
        <>
        {allowNavigate ?
        <NavBarElement allowNavigate={allowNavigate}>
            <ReturnPageButton onClick={returnPage}>Retornar</ReturnPageButton>
            <Logo onClick={goHome}>CINEFLEX</Logo>
            <CenterLogo></CenterLogo>
        </NavBarElement> 
        :
        <NavBarElement allowNavigate={allowNavigate}>
            <Logo onClick={goHome}>CINEFLEX</Logo>
        </NavBarElement>}
        </>
    )
}

const NavBarElement = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;
    justify-content: ${(props) => props.allowNavigate ? "space-between": "center"};
`
const Logo = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    &:hover {
    cursor: pointer;
    }`

const ReturnPageButton = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-left: 20px;
    &:hover {
    border: 3px solid #26abff;
    cursor: pointer;
    }
`
const CenterLogo = styled.div`
    width: 83px;
    margin-right: 20px;
`   