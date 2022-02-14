import React from "react"

import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";

import { Container, Title, TwoColumnsLayout, Center } from './layouts/index'

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
    .then(response => response.json())
    .then(data => {
      setPokemon(data)
    })
  }, [])

  if (pokemon.length === 0) return (
    <div>
      No pokemons found
    </div>
  )
  return (
    <Container>
      <Title>Pokemon</Title>
      <PokemonFilter
        filter={filter}
        setFilter={setFilter}
      />
      <TwoColumnsLayout>
        <PokemonTable pokemon={pokemon} filter={filter} setSelectedItem={setSelectedItem} />
        <Center>
          <PokemonInfo { ...selectedItem } />
        </Center>
      </TwoColumnsLayout>
    </Container>
  );
}

export default App;
