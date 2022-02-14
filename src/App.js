import React from 'react'
import PropTypes from 'prop-types'

import './App.css';
import pokemon from './pokemon.json'

const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
    </tr>
  )
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    types: PropTypes.arrayOf(PropTypes.string)
  })
}

function App() {
  const [filter, setFilter] = React.useState('')
  return (
    <div
      className="App"
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem'
      }}
      >
      <h1 className="title">Pokemon</h1>
      <input
        value={filter}
        onChange={event => setFilter(event.target.value)}
        type="text"
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: '70% 30%',
        gridColumnGap: '1rem'
      }}>
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              pokemon
              .filter(pkmn => pkmn.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0, 20)
              .map(pkmn => {
                return (
                  <PokemonRow key={pkmn.id} pokemon={pkmn} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
