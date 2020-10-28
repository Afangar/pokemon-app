import React from "react";
import "./homecards.scss";

let Cards = () => {
    return (
        <section className="homecards">
            <div className="divprimero">
            <div className="sandiasque">
                <img src="images/didyouknow.png"></img>
                <p>Pokémon also known as Pocket Monsters in Japan, created by Satoshi Tajiri in 1995 is a Japanese media franchise managed by the Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures.</p>
            </div>
            <div className="first">
                <img src="images/firstgeneration.png"></img>
                <p>Pokémon Indigo League is the first season of Pokémon and the first part of Pokémon the Series: The Beginning, a Japanese anime television series; The season follows the adventures of the ten-year-old Pokémon trainer Ash Ketchum and his electric mouse partner Pikachu, as they collect Gym Badges in the fictional Kanto region so they can compete in the Pokémon League competition at the Indigo Plateau.</p>
            </div>
            </div>
            <div className="divsegundo"> 
            <div className="bulba">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"></img>
                <p>Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon, is a dual-type Grass/Poison Pokémon introduced in Generation I, It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.</p>
            </div>
            <div className="squir">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"></img>
                <p>Squirtle is one of three starter Pokémon of Kanto, is a Water-type Pokémon introduced in Generation I, It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36.</p>
            </div>
            <div className="charma">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"></img>
                <p>Charmander is one of three starter Pokémon of Kanto, is a Fire-type Pokémon introduced in Generation I, It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.</p>
            </div>
            </div>
        </section>
    )
}

export default Cards;