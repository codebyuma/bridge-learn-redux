import $ from 'jquery';

import {GET_ALL_POKEMON_URL} from '../constants/api-url';


export const ACTION_TYPES = {
  favouritePokemon: 'FAVOURITE_POKEMON',
  setPokemon: 'SET_POKEMON'
};

export function favouritePokemon(pokemon) {
  return {
    type: ACTION_TYPES.favouritePokemon,
    payload: {
      pokemon,
    }
  }
}


export function getPokemon() {

  debugger;

  return function (dispatch) {
    debugger;
    $.get(GET_ALL_POKEMON_URL)
      .then(response => {
        debugger;
        dispatch({
          type: ACTION_TYPES.setPokemon,
          payload: {
            pokemon: response.results
          }
        })
      });

  };

}
