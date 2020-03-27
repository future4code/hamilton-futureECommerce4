import React from "react";
import styled from 'styled-components';

const ContainerCarrinho = styled.div`
    background-color:#fdcb6e;
`


class CarrinhoCompra extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

renderizarItensCarrinho=()=>{
    console.log("banana" + this.props.banana)
    console.log(this.props.banana)
    const joao = this.props.banana;
    const auxiliar = joao.map((produto)=>{
        return (<div><p>{produto.nome}</p></div>);
    })
    return auxiliar;
}


render(){
    

    return(

        <ContainerCarrinho>            
            <h4>Carrinho de compras</h4>
            {this.renderizarItensCarrinho()}
            
            
        </ContainerCarrinho>
    )


}

}

export default CarrinhoCompra;