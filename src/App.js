import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import pokemon from "./pokemon.json";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    types: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h2>{ name.english }</h2>
      <table>
        <tbody>
          {
            Object.keys(base).map(key => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{base[key]}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  base: PropTypes.shape({
    "HP": PropTypes.number.isRequired,
    "Attack": PropTypes.number.isRequired,
    "Defense": PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    "Speed": PropTypes.number.isRequired
  })
}

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <div
      className="App"
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon</h1>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        type="text"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon
              .filter((pkmn) =>
                pkmn.name.english.toLowerCase().includes(filter.toLowerCase())
              )
              .slice(0, 20)
              .map((pkmn) => {
                return (
                  <PokemonRow
                    key={pkmn.id}
                    pokemon={pkmn}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                );
              })}
          </tbody>
        </table>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {selectedItem && (
            <PokemonInfo { ...selectedItem } />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
