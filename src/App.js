import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import { Button } from '@mui/material';

import "./App.css";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="outlined" color="primary" onClick={() => onSelect(pokemon)}>Select</Button>
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

// normal CSS
const Title = styled.h1`
  text-align: center;
  color: blue;
`
const TwoColumnsLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`

const Container = styled.div`
  text-align: center;
  background-color: white;
  min-height: 100vh;
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`

const Input = styled.input`
  width: 90%;
  margin: 0 auto;
  font-size: x-large;
  padding: 0.2rem;
`

const TableHead = styled.th`
  text-align: center;
  font-size: x-large;
  color: blue;
`

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
    .then(response => response.json())
    .then(data => {
      setPokemon(data)
    })
  }, [])

  if (pokemon.length === 0) return (
    <div>
      No pokemons found
    </div>
  )
  return (
    <Container>
      <Title>Pokemon</Title>
      <Input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        type="text"
      />
      <TwoColumnsLayout>
        <table width="100%">
          <thead>
            <tr>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Select</TableHead>
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
      </TwoColumnsLayout>
    </Container>
  );
}

export default App;
