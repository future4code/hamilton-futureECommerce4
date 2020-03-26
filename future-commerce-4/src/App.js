import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import CarrinhoCompra from './Components/CarrinhoCompra';
import Display from './Components/Display';
import Footer from './Components/Footer';


const Container = styled.div`
  display:grid;
  grid-template-rows: 15vh 8vh 100vh 20vh;
`



function App() {
  return (
    <Container>
          <Header />
          <NavBar />
          <Display />
          <Footer />
    </Container>
  );
}

export default App;
