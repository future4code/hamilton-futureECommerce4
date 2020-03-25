import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Carrinho = styled.img`
    height: 26px;
`
const CaixaInput = styled.div`

`

class NavBar extends React.Component{

render(){

return(
    <Container>
        <CaixaInput>
            <label>Valor Mínimo: </label>
            <input></input>
        </CaixaInput>
       
       <CaixaInput>
            <label>Valor Máximo: </label>
            <input></input>
       </CaixaInput>

        <CaixaInput>
            <label>Filtrar por: </label>
            <select>
                <option>Preço: Crescente</option>
                <option>Preço: Descrescente</option>
            </select>
        </CaixaInput>

        <CaixaInput>
            <label>Buscar produto: </label>
            <input></input>
        </CaixaInput>

        <Carrinho src={require("../icones/shopping-cart.png")} alt={"carrinho"}/>
    </Container>
    )

}



}

export default NavBar;