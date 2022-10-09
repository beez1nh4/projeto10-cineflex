import styled from "styled-components"

export default function Footer({session, isSession}) {
    return(
        <>
        <FooterContainer>
            {isSession ? 
            <><img src={session.posterURL} alt="" data-identifier="movie-img-preview"/>
            <p data-identifier="movie-and-session-infos-preview">{session.title}<br/>{session.weekday} - {session.time}</p></> 
            :
            <><img alt=""src={session.posterURL} data-identifier="movie-img-preview"/>
            <p data-identifier="movie-and-session-infos-preview">{session.title}</p> </>}
        </FooterContainer>
        
        </>
        
    )
}          

const FooterContainer = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 14px;
    } 
    & img{
        width: 48px;
        height: 72px;
        border: 8px solid #FFFFFF;
        margin-left: 10px;
    }
`