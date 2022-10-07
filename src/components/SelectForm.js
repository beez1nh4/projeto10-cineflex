import styled from "styled-components"

export default function SelectForm() {
    return (
        <>
        <form>
            <Label
                name="name">
                Nome do comprador:
            </Label>  
            <Input
                name="nome"
                //value={form.name}
                //onChange={handleForm}
                type="text"
                placeholder="   Digite seu nome..."
                required
            />
            <Label
                name="cpf">
                CPF do comprador:
            </Label>  
            <Input
                name="cpf"
                //value={form.cpf}
                //onChange={handleForm}
                type="text"
                placeholder="   Digite seu CPF..."
                required
            />
        </form> 
        </>
    )
}

const Input = styled.input`
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;

  ::placeholder {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #AFAFAF;
  }
` 
const Label = styled.label`
    width: 327px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
`