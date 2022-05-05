import React from "react"
import Styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"
import Main from "./components/Main"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    
  }
  html{
  
  }
  `; 

export default class App extends React.Component{
  render(){
    return(
      <>
        <GlobalStyle/>
        <Header/>
        <Main/>
      </>
    )
  }
}