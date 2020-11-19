import React from "react";
import "./listapokemon.scss";

const Pokemon = (props) => ( 

<li className={props.vista? "list" : "cartas"} key={props.name} >
    <h3 className="name">{props.name}</h3>
    {props.vista? ("") : (
    <img src={props.image}>
    </img>)}
    <ul className="boxtype">
        {props.type.map((tipo) => <li className={`tipo ${tipo.type.name}`}>{tipo.type.name}</li> )}
    </ul>
    
</li>
)

export default Pokemon;