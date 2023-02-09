import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList, search}) {

  const filteredSearch = pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  const pokemonCard = filteredSearch.map(pokemon => {
    return <PokemonCard key={pokemon.id} {...pokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;
