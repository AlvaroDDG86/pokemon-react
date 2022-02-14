import { Button } from "@mui/material";
import { PokemonTypeRow } from "../pokemonTypes";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onSelect(pokemon)}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};


PokemonRow.propTypes= PokemonTypeRow

export default PokemonRow;
