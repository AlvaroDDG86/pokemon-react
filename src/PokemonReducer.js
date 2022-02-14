export const initialState = {
  filter: "",
  pokemon: [],
  pokemonFav: [],
  selectedItem: null,
  order: 'asc'
};

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_POKEMON_FAV":
      const index = state.pokemonFav.findIndex(pkmn => pkmn.id === action.payload.id)
      if (index === -1) {
        return {
          ...state,
          pokemonFav: [...state.pokemonFav, action.payload]
        }
      } else {
        return {
          ...state, 
          pokemonFav: state.pokemonFav.filter(pkmn => pkmn.id !== action.payload.id)
        }
      }
    case "SET_SELECTED":
      return {
        ...state,
        selectedItem: state.selectedItem && state.selectedItem.id === action.payload.id ? null : action.payload,
      };
    default:
      return { ...initialState };
  }
};

export default PokemonReducer