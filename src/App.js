import React, { Component } from 'react';
import { connect } from 'react-redux'
import { favouritePokemon } from './actions';

import { POKEAPI_BASE_URL } from './constants/api-url';

//https://img.pokemondb.net/artwork/${pokemon}.jpg <-- use for pictures

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = {
  favouritePokemon,
};

class App extends Component {
  componentDidMount() {
    //get initial pokemon here, and update state with an action!
  }

  render() {
    const { pokemon, favouritePokemon } = this.props; // go over destructuring again
    return (
      <h1>Pokemon App!</h1>
      //create SelectedPokemon here
      //create PokemonList Here
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
