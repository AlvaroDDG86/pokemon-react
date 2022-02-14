import { useContext } from 'react';
import { Input } from '../layouts/index'
import PokemonContext from '../PokemonContext';
const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext)
  return (
    <Input
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
      type="text"
    />
  );
};

export default PokemonFilter;
