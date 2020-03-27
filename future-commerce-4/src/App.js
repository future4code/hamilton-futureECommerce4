import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Footer from './Components/Footer';


const Container = styled.div`
  display:grid;
  grid-template-rows: 15vh 8vh 100vh 10vh;
  font-family: 'Roboto', sans-serif;
`



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itensVenda:[
            {
            id: 234568,
            nome: "Viagem à Lua",
            imagem: require("./imagens/1.png"),
            preco: 20000
            },
            {
            id: 153497,
            nome: "BootCamp Astronauta",
            imagem: require("./imagens/2.jpg"),
            preco: 8999
            },
            {
            id: 158526,
            nome: "Bico da aeronave",
            imagem: require("./imagens/3.jpg"),
            preco: 1500
            },
            {
            id: 822935,
            nome: "Viagem pela órbita da Terra",
            imagem: require("./imagens/12.jpg"),
            preco: 30000
            }, 
            {
            id: 579147,
            nome: "Foguete com pet",
            imagem: require("./imagens/7.png"),
            preco: 18999.00
            },
            {
            id: 222222,
            nome: "Espace Bus Tripulado",
            imagem: require("./imagens/8.png"),
            preco: 35000.00
            },
            {
            id: 467893,
            nome: "Espaçonaves Conceito",
            imagem: require("./imagens/9.jpg"),
            preco: 25350.00
            },
            {
            id: 111970,
            nome: "Foguete infantil",
            imagem: require("./imagens/10.png"),
            preco: 5899.00
            }
          ],
          meuCarrinho: [],
          filtroMenor: null,
          filtroMaior: Infinity,
          busca: ""
        }
    }


onChangeFiltroMenor=(event)=>{
  if(event===""){
     this.setState({filtroMenor: null});
  }else{
    this.setState({filtroMenor: event});
    }
}

onChangeFiltroMaior=(event)=>{
  if(event===""){
    this.setState({filtroMaior: Infinity});
  }else{
    this.setState({filtroMaior: event});
  }
}

onChangeSearch=(event)=>{
  this.setState({busca: event});
}

adicionarAoCarrinho=(id)=>{
  const novoProduto = this.state.itensVenda.filter((elemento)=>{
    return elemento.id === id;
  })

  const carrinho = [...this.state.meuCarrinho, novoProduto];

  console.log("Carrinho" + carrinho);
  console.log("novo produto " + novoProduto);

  this.setState({meuCarrinho: carrinho});
}


 render(){

  console.log(this.state.meuCarrinho);

  return (
    <Container>
          <Header />
          <NavBar 
            onChangeSearch = {this.onChangeSearch}
            onChangeFiltroMenor = {this.onChangeFiltroMenor}
            onChangeFiltroMaior = {this.onChangeFiltroMaior}
          />
          <Display 
          itensVenda={this.state.itensVenda}
          filtroMenor={this.state.filtroMenor}
          filtroMaior={this.state.filtroMaior}
          textoBusca={this.state.busca}
          adicionarAoCarrinho={this.adicionarAoCarrinho}
          meuCarrinho={this.state.meuCarrinho}/>
          <Footer />
    </Container>
  );
 } 

}

export default App;
