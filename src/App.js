import React from "react";

import PokemonContext from "./PokemonContext";

import "./App.css";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";

import { Container, Title, TwoColumnsLayout, Center } from "./layouts/index";

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  if (pokemon.length === 0) return <div>No pokemons found</div>;
  return (
    <PokemonContext.Provider value={{
        filter,
        setFilter,
        selectedItem,
        setSelectedItem,
        pokemon,
        setPokemon
      }}>
      <Container>
        <Title>Pokemon</Title>
        <PokemonFilter />
        <TwoColumnsLayout>
          <PokemonTable />
          <Center>
            <PokemonInfo />
          </Center>
        </TwoColumnsLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
