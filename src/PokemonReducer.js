export const initialState = {
  filter: "",
  pokemon: [],
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
    case "SET_SELECTED":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return { ...initialState };
  }
};

export default PokemonReducer