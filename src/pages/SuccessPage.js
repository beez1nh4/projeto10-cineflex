import styled from "styled-components"

export default function SuccessPage({request, setRequest}) {
    const nameFormat = request.name.split(/ /g).map(word =>
        `${word.substring(0,1).toUpperCase()}${word.substring(1)}`)
    .join(" "); //coloca a primeira letra em maiúsculo
    let cpfFormat = ""
    for (let i=0; i< request.cpf.length; i++){
        cpfFormat+= request.cpf[i]
        if(i === 2 || i === 5){
            cpfFormat+= "."
        } if (i===8){
            cpfFormat+="-"
        }
    }
    return (
        <>
        <SuccessContainer>
        <Sucesso>Pedido feito <br/> com sucesso!</Sucesso>
        <Title>Filme e sessão</Title>
        <Information>{request.title}</Information>
        <Information>{request.date} {request.time}</Information>
        <Title>Ingressos</Title>
        {request.ids.map((num) => <Information key={num}>Assento {num}</Information>)}
        <Title>Comprador</Title>
        <Information>Nome: {nameFormat}</Information>
        <Information>CPF: {cpfFormat}</Information>
        <AlignButton>
        <HomeButton>Voltar para Home</HomeButton>
        </AlignButton>
        </SuccessContainer>
        </>
    )
}
const SuccessContainer = styled.div`
    margin-top: 67px;
`
const Sucesso = styled.div`
    margin-top: 90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    margin-bottom: 67px;
`
const Title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
    margin-left: 28px;
`
const Information = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left: 28px;
    margin-bottom: 10px;
`
const HomeButton = styled.button`
    width: 225px;
    height: 42px;
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
    align-self: center;
`
const AlignButton = styled.div`
    margin-top: 96px;
    display: flex;
    justify-content: center;
`