import { useContext } from "react";
import { Container, Title } from "../layouts/index";
import PokemonContext from "../PokemonContext";

const Favs = () => {
  const { state } = useContext(PokemonContext);
  return (
    <Container>
      <Title>Favourites</Title>
      {state.pokemonFav.map((pkmn) => {
        return (
          <div key={pkmn.id}>
            <h2>{ pkmn.name.english }<small>({ pkmn.name.japanese })</small></h2>
          </div>
        );
      })}
    </Container>
  );
};

export default Favs;
