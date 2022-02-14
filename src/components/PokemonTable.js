// import { PokemonInfoTable } from '../pokemonTypes';
import { useContext } from "react";
import PokemonRow from "./PokemonRow";
import { useSnackbar } from "notistack";
import { TableHead } from "../layouts/index";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(PokemonContext);

  const asc = state.order === "asc";
  const pokemonsShow = state.pokemon
    .filter((pkmn) =>
      pkmn.name.english.toLowerCase().includes(state.filter.toLowerCase())
    )
    .sort((a, b) => {
      var nameA = asc
        ? a.name.english.toUpperCase()
        : b.name.english.toUpperCase();
      var nameB = asc
        ? b.name.english.toUpperCase()
        : a.name.english.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

  if (pokemonsShow.length === 0) return <div>No pokemons found</div>;

  const selectItemHanlder = (isActive, pokemon) => {
    enqueueSnackbar(
      `${pokemon.name.english} ${
        isActive ? " is not active now" : " is active now"
      }`,
      {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        }
      }
    );
    dispatch({
      type: "SET_SELECTED",
      payload: pokemon,
    });
  };

  const favHandler = (isFav, pokemon) => {
    enqueueSnackbar(
      `${pokemon.name.english} ${
        isFav ? " is not favourite now" : " is favourite now"
      }`,
      {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        }
      }
    );
    dispatch({
      type: "SET_POKEMON_FAV",
      payload: pokemon,
    });
  };

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
        {pokemonsShow.slice(0, 20).map((pkmn) => (
          <PokemonRow
            key={pkmn.id}
            pokemon={pkmn}
            onSelect={selectItemHanlder}
            onFav={favHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

// PokemonTable.propTypes = PokemonInfoTable

export default PokemonTable;
