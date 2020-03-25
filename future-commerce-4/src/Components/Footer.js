import React from "react";
import styled from 'styled-components';

        const FooterDiv = styled.div `
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #a29bfe;
            padding: 15px;
            background-color: #2d3436;
            font-weight: bolder;
            font-size: 100%;
            grid-row: 4;
        `
        const ImgLogo = styled.img `
            width: 100px;
            height: 100px;
        `
        const Title = styled.p `
            color: #a29bfe;
        `
        const ListaDevs = styled.ul `
        	list-style: none;
	        padding-left: 0px;
        `
        const ItensDevs = styled.li `
        	display: inline;
	        padding: 0px 8px;

        `


class Footer extends React.Component {
  

    render() {


          
    return (
        <FooterDiv>
            <Title>Desenvolvido por:</Title>
            <ListaDevs>
                <ItensDevs>Ricardo Araujo</ItensDevs>
                <ItensDevs>Igor Delespoti</ItensDevs>
                <ItensDevs>João Pedro Fonseca</ItensDevs>
            </ListaDevs>
        </FooterDiv>

    )

    }
}

export default Footer;
