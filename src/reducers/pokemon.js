import {ACTION_TYPES} from "../actions/index";


const INITIAL_STATE = {
  pokemon: [],
  favouritePokemon: null
};

export const pokemon = (state = INITIAL_STATE, { type, payload }) => {

  switch(type){
    case ACTION_TYPES.favouritePokemon:
      return [...state, {favouritePokemon: payload.pokemon}]
  }

  return state;
};
