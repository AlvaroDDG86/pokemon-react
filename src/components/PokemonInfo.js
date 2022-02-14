import { useContext } from "react";
import PokemonContext from "../PokemonContext";
// import { PokemonTypeInfo } from "../pokemonTypes";

const PokemonInfo = () => {
  const { state: { selectedItem } } = useContext(PokemonContext)
  if (!selectedItem) return <div>No Pokemon selected</div>;
  return (
    <div
        style={{
            borderRadius: 5,
            border: 'solid 2px gray',
            background: '#1976d2',
            padding: '0.5rem',
            minWidth: '100%',
            color: 'white'
        }}
    >
      <h2>{selectedItem.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => {
            return (
              <tr key={key}>
                <td style={{ textAlign: 'left' }}>{key}</td>
                <td style={{ fontWeight: 'bold' }}>{selectedItem.base[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// PokemonInfo.propTypes = PokemonTypeInfo;

export default PokemonInfo;
