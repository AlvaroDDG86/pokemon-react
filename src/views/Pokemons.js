import { Container, Title, TwoColumnsLayout, Center } from "../layouts/index";

import PokemonFilter from "../components/PokemonFilter";
import PokemonInfo from "../components/PokemonInfo";
import PokemonTable from "../components/PokemonTable";
import PokemonOrder from "../components/PokemonOrder";


const Pokemons = () => {
  return (
    <Container>
      <Title>Pokemon</Title>
      <PokemonFilter />
      <PokemonOrder />
      <TwoColumnsLayout>
        <PokemonTable />
        <Center>
          <PokemonInfo />
        </Center>
      </TwoColumnsLayout>
    </Container>
  );
};

export default Pokemons;
