import PropTypes from "prop-types";

export const PokemonTypeRow = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    types: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

export const PokemonTypeInfo = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number,
    Attack: PropTypes.number,
    Defense: PropTypes.number,
    "Sp. Attack": PropTypes.number,
    "Sp. Defense": PropTypes.number,
    Speed: PropTypes.number,
  }),
};

export const PokemonInfoTable = {
  filter: PropTypes.string,
  setSelectedItem: PropTypes.func,
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.shape({
        english: PropTypes.string,
        japanese: PropTypes.string,
        chinese: PropTypes.string,
        french: PropTypes.string,
      }),
      type: PropTypes.arrayOf(PropTypes.string),
      base: PropTypes.shape({
        HP: PropTypes.number,
        Attack: PropTypes.number,
        Defense: PropTypes.number,
        "Sp. Attack": PropTypes.number,
        "Sp. Defense": PropTypes.number,
        Speed: PropTypes.number,
      }),
    })
  ),
};
