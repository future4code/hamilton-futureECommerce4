import React from "react";
import styled from 'styled-components';


        const HeaderDiv = styled.div `
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            align-items: center;
            padding: 5px;
            background-color: #a29bfe;
        `
        const ImgLogo = styled.img `
            width: 100px;
            height: 100px;
        `
        const Title = styled.h1 `
            color: #2d3436;
            font-weight: bolder;
            font-family: Rob;
        `
        const DivLogo = styled.div `
            grid-column: 2;
        `
        const DivTitle = styled.div `
            grid-column: 4/13;
        `
class Header extends React.Component {
  

    render() {


          
    return (
        <HeaderDiv>
            <DivLogo>
                <ImgLogo src={require("../imagens/logo.png")} alt={require}/>   
            </DivLogo>
            <DivTitle>
                <Title>E-commerce especializado em transporte espacial.</Title>
            </DivTitle>
            
        </HeaderDiv>

    )

    }
}

export default Header;
