import { PokemonInfoTable } from '../pokemonTypes';
import PokemonRow from "./PokemonRow";

import { TableHead } from '../layouts/index'

const PokemonTable = ({ pokemon, filter, setSelectedItem }) => {

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
        {pokemon
          .filter((pkmn) =>
            pkmn.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pkmn) => (
              <PokemonRow
                key={pkmn.id}
                pokemon={pkmn}
                onSelect={(pokemon) => setSelectedItem(pokemon)}
              />
            ))}
      </tbody>
    </table>
  );
};

PokemonTable.propTypes = PokemonInfoTable

export default PokemonTable