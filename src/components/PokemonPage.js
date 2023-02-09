import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((response) => response.json())
    .then(data => setPokemonList(data))

  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        search={search}
        setSearch={setSearch}
      />
      <br />
      <Search
        search={search}
        setSearch={setSearch}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
       />
      <br />
      <PokemonCollection
        search={search}
        setSearch={setSearch}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        />
    </Container>
  );
}

export default PokemonPage;
