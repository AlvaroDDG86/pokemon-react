// import { PokemonInfoTable } from '../pokemonTypes';
import { useContext } from "react";
import PokemonRow from "./PokemonRow";

import { TableHead } from '../layouts/index'
import PokemonContext from '../PokemonContext';

const PokemonTable = () => {
  const { state, dispatch } = useContext(PokemonContext)

  return (
    <table width="100%">
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Select</TableHead>
        </tr>
      </thead>
      <tbody>
        {state.pokemon
          .filter((pkmn) =>
            pkmn.name.english.toLowerCase().includes(state.filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pkmn) => (
              <PokemonRow
                key={pkmn.id}
                pokemon={pkmn}
                onSelect={(pokemon) => dispatch({
                  type: 'SET_SELECTED',
                  payload: pokemon
                })}
              />
            ))}
      </tbody>
    </table>
  );
};

// PokemonTable.propTypes = PokemonInfoTable

export default PokemonTable