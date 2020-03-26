import React from "react";
import styled from 'styled-components';


const ContainerDisplay = styled.div`
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
}
`

class Display extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <ContainerDisplay> 
                <main>
                    <div id="box1" className="item">
                    <img src={require("../imagens/1.png")}/>
                    <a>Item 1<br/>R$2.000,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box2" className="item">
                    <img src={require("../imagens/2.jpg")}/>
                    <a>Item 2<br/>R$8.999,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    
                    </div>

                    <div id="box3" className="item">
                    <img src={require("../imagens/3.jpg")}/>
                    <a>Item 3<br/>R$1.500,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box4" className="item">
                    <img src={require("../imagens/4.png")}/>
                    <a>Item 4<br/>R$30.000,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box5" className="item">
                    <img src={require("../imagens/7.png")}/>
                    <a>Item 5<br/>R$18.999,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box6" className="item">
                    <img src={require("../imagens/8.png")}/>
                    <a>Item 6<br/>R$35.000,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box7" className="item">
                    <img src={require("../imagens/9.jpg")}/>
                    <a>Item 7<br/>R$25.350,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                    <div id="box8" className="item">
                    <img src={require("../imagens/10.png")}/>
                    <a>Item 8<br/>R$5.899,00</a>
                    <br/>
                    <button>Adicionar ao carrinho</button>
                    </div>

                </main>
            </ContainerDisplay>    
        )
    };
}

export default Display;