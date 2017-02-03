import React, { Component } from 'react';
import { connect } from 'react-redux'
import { favouritePokemon, getPokemon } from './actions';

import {PokemonView} from './components/pokemon-view';

import { GET_ALL_POKEMON_URL } from './constants/api-url';

//https://img.pokemondb.net/artwork/${pokemon}.jpg <-- use for pictures

const mapStateToProps = state => ({
  pokemon: state.pokemon.list,
});

const mapDispatchToProps = {
  favouritePokemon,
  getPokemon
};

class App extends Component {
  componentDidMount() {
    this.props.getPokemon();
  }

  render() {

    const { pokemon, favouritePokemon } = this.props; // go over destructuring again
    return (

      <div>
        <h1>Pokemon App!</h1>
        <PokemonView favourite={(name) => console.log(name)} pokeData={{name: 'Della', height: '180cm'}} />

        {pokemon.map(poke => <h2 key={poke.name}>{poke.name}</h2>)}

      </div>
      //create PokemonList Here
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
