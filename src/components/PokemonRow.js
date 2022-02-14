import { Button } from "@mui/material";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { PokemonTypeRow } from "../pokemonTypes";

const PokemonRow = ({ pokemon, onSelect, onFav }) => {
  const { state } = useContext(PokemonContext)
  const isSelected = state.selectedItem && pokemon.id === state.selectedItem.id
  const isFav = state.pokemonFav.findIndex(pkmn => pkmn.id === pokemon.id) > -1
  return (
    <tr
      style={{
        color: isSelected ? '#1976d2' : 'black'
      }}
      >
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%'
        }}
      >
        <Button
          variant={isSelected ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onSelect(isSelected, pokemon)}
        >
          Select
        </Button>
        <Button
          variant={isFav ? 'contained' : 'outlined'}
          color="secondary"
          onClick={() => onFav(isFav, pokemon)}
        >
          Fav
        </Button>
      </td>
    </tr>
  );
};


PokemonRow.propTypes= PokemonTypeRow

export default PokemonRow;
