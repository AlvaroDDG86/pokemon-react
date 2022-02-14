import { PokemonTypeInfo } from "../pokemonTypes";

const PokemonInfo = ({ name, base }) => {
  if (!name) return <div>No Pokemon selected</div>;
  return (
    <div
        style={{
            borderRadius: 5,
            border: 'solid 2px #1976d2',
            background: 'lightgray',
            padding: '0.5rem',
            minWidth: '100%'
        }}
    >
      <h2>{name.english}</h2>
      <table>
        <tbody>
          {Object.keys(base).map((key) => {
            return (
              <tr key={key}>
                <td style={{ textAlign: 'left' }}>{key}</td>
                <td style={{ fontWeight: 'bold' }}>{base[key]}</td>
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
