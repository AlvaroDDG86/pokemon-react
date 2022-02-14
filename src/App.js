import React, { useReducer } from "react";

import PokemonContext from "./PokemonContext";
import { Container, Title, TwoColumnsLayout, Center } from "./layouts/index";

import "./App.css";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";

import PokemonReducer, { initialState } from "./PokemonReducer";

function App() {
  const [state, dispatch] = useReducer(PokemonReducer, { ...initialState })

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'SET_POKEMON',
          payload: data
        });
      });
  }, []);

  if (state.pokemon.length === 0) return <div>No pokemons found</div>;
  return (
    <PokemonContext.Provider value={{
        state,
        dispatch
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
