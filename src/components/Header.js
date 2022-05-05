import React from "react"
import Styled from "styled-components"
import Flix from "../imgs/ToDoFLIX.png"
import User from "../imgs/user.svg"
const Top = Styled.header`
    width:100%;
    height:10vh;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`
const TopContent = Styled.div`
    width: 90vw;
    display: flex;
    justify-content:space-between;
`
const Ul = Styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width: 12vw;
    color:white;
    font-size:1vw;
`
const Logo = Styled.div`
    height: 5vh;
    width: 15vh;
    background-repeat:no-repeat;
    background-image: url("${Flix}");
 
`
const LeftSect = Styled.div`
    display:flex;
    height: 100%;
`
const RightSect = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height: 100%;
    width: 40vw;
    
`
const Button = Styled.button`
    width:9vw;
    height: 2.4vw;
    background-color:red;
    color:white;
    border:none;
    border-radius:5px;
`
const Input = Styled.input`
    width: 25vw;
    height:4vh;
    background-color:#2C2C2C;
    color:white;
    border:none;
    border-radius:3px;
`
const Header = () =>{
    return(
        <Top>
            <TopContent>
            <LeftSect>

            <Logo></Logo>
            <Ul>
                <li>
                    Início
                </li>
                <li>
                    Categorias
                </li>
            </Ul>
            </LeftSect>  
            <RightSect>
                <Button>
                    Adicionar Filme
                </Button>
                <Input placeholder="Pesquisar"></Input>
                <img src={User}/>
            </RightSect>
            </TopContent>  
            
           
        </Top>
    )
}

export default Header