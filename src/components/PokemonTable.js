// import { PokemonInfoTable } from '../pokemonTypes';
import { useContext } from "react";
import PokemonRow from "./PokemonRow";

import { TableHead } from '../layouts/index'
import PokemonContext from '../PokemonContext';

const PokemonTable = () => {
  const { state, dispatch } = useContext(PokemonContext)

  const asc = state.order === 'asc'
  const pokemonsShow = state.pokemon.filter((pkmn) =>
    pkmn.name.english.toLowerCase().includes(state.filter.toLowerCase())
  ).sort((a, b) => {
    var nameA = asc ? a.name.english.toUpperCase() : b.name.english.toUpperCase();
    var nameB = asc ? b.name.english.toUpperCase() : a.name.english.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })

  if (pokemonsShow.length === 0) return (
    <div>
      No pokemons found
    </div>
  )

  return (
    <table width="100%">
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Actions</TableHead>
        </tr>
      </thead>
      <tbody>
        {
          pokemonsShow
          .slice(0, 20)
          .map((pkmn) => (
              <PokemonRow
                key={pkmn.id}
                pokemon={pkmn}
                onSelect={(pokemon) => dispatch({
                  type: 'SET_SELECTED',
                  payload: pokemon
                })}
                onFav={(pokemon) => dispatch({
                  type: 'SET_POKEMON_FAV',
                  payload: pokemon
                })}
              />
            ))
        }
      </tbody>
    </table>
  );
};

// PokemonTable.propTypes = PokemonInfoTable

export default PokemonTable