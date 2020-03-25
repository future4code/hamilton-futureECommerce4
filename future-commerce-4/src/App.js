import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import CarrinhoCompra from './Components/CarrinhoCompra';
import Display from './Components/Display';
import Footer from './Components/Footer';


const Container = styled.div`
  
`



function App() {
  return (
    <Container>
          {/* <Header />  */}
          <NavBar />
          {/* <CarrinhoCompra />
          <Display />
          <Footer /> */}
    </Container>
  );
}

export default App;
