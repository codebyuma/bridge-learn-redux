import React from 'react';

export const PokemonView = ({pokeData, favourite}) => <div style={{width: '80vw', marginLeft: 'auto'}}>

  <h2>{pokeData.name}</h2>

  <h4>Height: {pokeData.height}</h4>

  <button onClick={() => favourite(pokeData.name)}>Save as favourite</button>

</div>;
