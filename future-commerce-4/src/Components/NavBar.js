import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Carrinho = styled.div`
    height: 26px;
img {
    height: 100%;

}    
`
const MenuDropDown = styled.div`
    background-color: rgb(129, 81, 218);
    height: 88.4vh;
    width: 30vh;
    position: absolute;
    transition: all .2s linear;
    left: -300px;

  nav{
  width: 100%;
  position: absolute;
  top: 60px;
}

nav a{
  text-decoration: none;
}

`

const CaixaInput = styled.div`

`

class NavBar extends React.Component{


onChangeFiltroMenor = (event) => {
    return this.props.onChangeFiltroMenor(event.target.value)
}
onChangeFiltroMaior = (event) => {
    return this.props.onChangeFiltroMaior(event.target.value)
}
onChangeBusca = (event) =>{
    const texto = event.target.value;

    return this.props.onChangeSearch(texto.toLowerCase());
}
onChangeOrdenacao = (event)=>{
    const ordenacao = event.target.value;

    return this.props.onChangeOrdenacao(ordenacao);
}



render(){

return(
    <Container>
        <CaixaInput>
            <label>Valor Mínimo: </label>
            <input type="number" onChange={this.onChangeFiltroMenor} value={this.props.valorFiltroMenor}></input>
        </CaixaInput>
       
       <CaixaInput>
            <label>Valor Máximo: </label>
            <input type="number" onChange={this.onChangeFiltroMaior} value={this.props.valorFiltroMaior}></input>
       </CaixaInput>

        <CaixaInput>
            <label>Filtrar por: </label>
            <select onChange={this.onChangeOrdenacao}>
                <option value="nenhum">Nenhum</option>
                <option value="crescente">Preço: Crescente</option>
                <option value="decrescente">Preço: Decrescente</option>
            </select>
        </CaixaInput>

        <CaixaInput>
            <label>Buscar produto: </label>
            <input onChange={this.onChangeBusca} value={this.props.valorTextoBusca}></input>
        </CaixaInput>

        <Carrinho>
            <input type="checkbox" id="check"/>
            <label 
                id="icon" 
                for="check">
                <img src={require("../icones/shopping-cart.png")} alt={"carrinho"}/>
            </label>

            <MenuDropDown>
                <nav>
                    <a href=""><div class="link">Home</div></a>
                    <a href=""><div class="link">Em alta</div></a>
                    <a href=""><div class="link">Populares</div></a>
                    <a href=""><div class="link">Inscrições</div></a>
                    <a href=""><div class="link">Favoritos</div></a>
                    <a href=""><div class="link">Histórico</div></a>
                </nav>
            </MenuDropDown>
        </Carrinho>
    </Container>
    )

}

}
export default NavBar;