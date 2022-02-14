import React, { useReducer } from "react";

import { Routes, Route } from "react-router-dom";
import PokemonContext from "./PokemonContext";

import "./App.css";
import TheHeader from "./components/TheHeader";
import Pokemons from "./views/Pokemons";
import Favs from "./views/Favs";

import PokemonReducer, { initialState } from "./PokemonReducer";

function App() {
  const [state, dispatch] = useReducer(PokemonReducer, { ...initialState });

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        });
      });
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <TheHeader />
      <Routes>
        <Route path="/" element={<Pokemons />}></Route>
        <Route path="/favs" element={<Favs />}></Route>
      </Routes>
    </PokemonContext.Provider>
  );
}

export default App;
