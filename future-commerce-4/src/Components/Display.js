import React from "react";
import styled from 'styled-components';
import CarrinhoCompra from './CarrinhoCompra'


const ContainerDisplay = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
 
 
  main{
  
  display:grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  margin: 10px;
  width: 120vh;
  height: 81vh;
  grid-gap: 10vh;
}



main>.item{

  margin: 5px;
  border: 1px dashed #fd79a8;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 39vh;
}

main>.item>img{
  width: 15vw;
  height: 25vh;
  padding: 5px;
}

main>div>a{
  text-decoration: none;
  color: #a29bfe;
}



button{
    height: 6vh;
    width: 15.8vw;
    color: #dfe6e9;
    font-size: 13px;
    background-color: #2d3436;
:hover {
background: darkorange;
  } 
}
`

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

filtroValor=()=>{

  const produtosFiltrados = this.props.itensVenda.filter((elemento)=>{
    return ((Number(elemento.preco) >= this.props.filtroMenor) && 
    (Number(elemento.preco) <= this.props.filtroMaior))
    
  })

  return this.filtroBusca(produtosFiltrados)  
}

filtroBusca=(produtosFiltrados)=>{
  const filtrados = produtosFiltrados.filter((elemento)=>{
    const nomeMinusculo = elemento.nome.toLowerCase();
    const textoBusca = this.props.textoBusca
    
    return (nomeMinusculo.includes(textoBusca));
  })

  return this.insereItemVenda(filtrados);
}

insereItemVenda=(produtosFiltrados)=>{
  const auxiliar = produtosFiltrados.map((elemento,index)=>{
    return (<div className="item" key={index}>
            <img src={elemento.imagem}/>
            <a>{elemento.nome}<br/>Ҩ Ϭ$ {elemento.preco}</a>
            <br/>
            <button onClick={()=>this.adicionarAoCarrinho(elemento.id)}>Adicionar ao carrinho</button>
            </div>)
  })
  return auxiliar;
}

adicionarAoCarrinho=(id)=>{
  this.props.adicionarAoCarrinho(id);
}

  render() {

    let meuCarrinhoDisplay = this.props.meuCarrinho;
    console.log("Meu carrinho" + meuCarrinhoDisplay);
    console.log(meuCarrinhoDisplay);
    console.log(this.props.meuCarrinho);
    
    
    
    // [{
    //   id: 467893,
    //   nome: "Espaçonaves Conceito",
    //   preco: 25350.00
    //   },
    //   {
    //   id: 111970,
    //   nome: "Foguete infantil",
    //   preco: 5899.00
    //   }
    // ];

  
    return(
      <ContainerDisplay> 
        <main>
          {this.filtroValor()}
        </main>
      <CarrinhoCompra banana={meuCarrinhoDisplay}/>
      </ContainerDisplay>
      )
  };
}

export default Display;