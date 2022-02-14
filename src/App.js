import React from 'react'
import './App.css';

import pokemon from './pokemon.json'

function App() {
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
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map(pkmn => {
              return (
                <tr>
                  <td>{pkmn.name.english}</td>
                  <td>{pkmn.type.join(', ')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
