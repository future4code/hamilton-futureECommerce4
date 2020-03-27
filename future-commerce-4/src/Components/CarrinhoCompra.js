import React, { PureComponent } from "react";
import styled from 'styled-components';

const ContainerCarrinho = styled.div`
    background-color:#fdcb6e;
`


class CarrinhoCompra extends React.Component{


renderizarItensCarrinho=()=>{
    const auxiliar = this.props.meuCarrinhoDisplay.map((produto)=>{
        return (<div>{produto.nome}
                <buttton onClick={()=>this.props.removeItemCarrinho(produto.id)}>X</buttton>
                </div>);
    })
    return auxiliar;
}


totalCarrinho=()=>{
    let sum=0;

    const soma = this.props.meuCarrinhoDisplay.forEach((produto)=>{
        sum = sum + produto.preco;
        return sum;
    })

    return (<div>Total Ҩ Ϭ$ {sum}</div> )
}


render(){
    return(
        <ContainerCarrinho>            
            <h4>Carrinho de compras</h4>
            {this.renderizarItensCarrinho()}
            {this.totalCarrinho()}
        </ContainerCarrinho>
    )
}

}
export default CarrinhoCompra;