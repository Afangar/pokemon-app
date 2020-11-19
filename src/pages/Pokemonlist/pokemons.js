import React, { Component } from "react";
import "./pokemons.scss";
import Pokemon from "./listapokemon"

class Pokemonslist extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        pokemons: [],
        next: "",
        previous: "",
        listview: false,
      };
    }
  
    componentDidMount() {
      this.getPokemons();
    }

    getPokemons = async () => {
      
      const request1 = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const response = await request1.json();

      this.setState({next: response.next,previous: response.previous,pokemons: []})

      response.results.forEach(async element => {
        const request2 = await fetch(element.url);
        const response1 = await request2.json();

        const pokemon = {name: element.name,
        image: response1.sprites.other.dream_world.front_default,
        type: response1.types} 

        this.setState({pokemons: [...this.state.pokemons,pokemon]})
      });
    };

    masPokemons = async () => {
      const request1 = await fetch(this.state.next);
      const response = await request1.json();

      this.setState({next: response.next,previous: response.previous,pokemons: []})

      response.results.forEach(async element => {
        const request2 = await fetch(element.url);
        const response1 = await request2.json();

        const pokemon = {name: element.name,
        image: response1.sprites.other.dream_world.front_default,
        type: response1.types} 

        this.setState({pokemons: [...this.state.pokemons,pokemon]})
      });
    };
  
    menosPokemons = async () => {
      const request1 = await fetch(this.state.previous);
      const response = await request1.json();

      this.setState({next: response.next,previous: response.previous,pokemons: []})

      response.results.forEach(async element => {
        const request2 = await fetch(element.url);
        const response1 = await request2.json();

        const pokemon = {name: element.name,
        image: response1.sprites.other.dream_world.front_default,
        type: response1.types} 

        this.setState({pokemons: [...this.state.pokemons,pokemon]})
      });
    };


    render() {
      return (
        <div className="api">
          <h1 className="titulo"> Pokemons </h1>
          <div className="vista">
            <button className="boton" onClick={ ()=> this.setState({listview: !this.state.listview})}>
              Cambio de vista
            </button>
          </div>
          <ul className="ul">
            {this.state.pokemons
              ? this.state.pokemons.map((item) => (
                  <Pokemon name={item.name} image={item.image} type={item.type} vista={this.state.listview}/>
                ))
              : ""}
          </ul>
          <div className="paginador">
            {this.state.previous ? (
              <button className="boton" onClick={this.menosPokemons}>
                Pagina anterior
              </button>
            ) : (
              ""
            )}
            {this.state.next ? (
              <button className="boton" onClick={this.masPokemons}>
                Siguiente pagina
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  };
  
  export default Pokemonslist;