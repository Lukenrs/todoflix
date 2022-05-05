import React from "react"
import Sonic from "../imgs/sonic-o-filme.jpg"
export default class MovieDest extends React.Component{
    state = {
    movie:{name:"Sonic",pic:Sonic}
    }
    render(){
        return(
            <>
            <img src={Sonic}/>
            </>
        )
    }
}