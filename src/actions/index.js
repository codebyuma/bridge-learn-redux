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
  //thunk here!
}
