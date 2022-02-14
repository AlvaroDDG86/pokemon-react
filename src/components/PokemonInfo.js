import { useContext } from "react";
import PokemonContext from "../PokemonContext";
// import { PokemonTypeInfo } from "../pokemonTypes";

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext)
  if (!selectedItem) return <div>No Pokemon selected</div>;
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
