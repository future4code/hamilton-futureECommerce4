import React from "react";
import styled from 'styled-components';

        const HeaderDiv = styled.div `
            display: flex;
            justify-content: space-evenly;
            padding: 15px;
            background-color: #a29bfe;
        `
        const ImgLogo = styled.img `
            width: 100px;
            height: 100px;
        `
        const Title = styled.p `
            color: #2d3436;
            font-weight: bolder;
            font-size: 130%;
        `

class Header extends React.Component {
  

    render() {


          
    return (
        <HeaderDiv>
            <ImgLogo src={require/*("../imagens/logo.png")*/} alt={require}/>
            <Title>E-commerce especializado em transporte espacial.</Title>
        </HeaderDiv>

    )

    }
}

export default Header;
