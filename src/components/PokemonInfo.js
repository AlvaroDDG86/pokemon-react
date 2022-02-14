import { PokemonTypeInfo } from "../pokemonTypes";

const PokemonInfo = ({ name, base }) => {
  if (!name) return <div>No Pokemon selected</div>;
  return (
    <div>
      <h2>{name.english}</h2>
      <table>
        <tbody>
          {Object.keys(base).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{base[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PokemonInfo.propTypes = PokemonTypeInfo;

export default PokemonInfo;
