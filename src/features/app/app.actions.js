
import { FETCH_POKEMONS } from '../pokemon-list/pokemon-list.types';

export const fetchPokemons = () =>
  ({ type: FETCH_POKEMONS.START, endpoint: 'pokemon' });
