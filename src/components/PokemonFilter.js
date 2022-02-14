import { Input } from '../layouts/index'
const PokemonFilter = ({ filter, setFilter }) => {
  return (
    <Input
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
      type="text"
    />
  );
};

export default PokemonFilter;
