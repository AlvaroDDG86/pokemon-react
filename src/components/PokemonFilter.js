import { useContext } from 'react';
import { Input } from '../layouts/index'
import PokemonContext from '../PokemonContext';
const PokemonFilter = () => {
  const { state, dispatch } = useContext(PokemonContext)
  return (
    <Input
      value={state.filter}
      onChange={(event) => dispatch({
        type: 'SET_FILTER',
        payload: event.target.value
      })}
      type="text"
    />
  );
};

export default PokemonFilter;
