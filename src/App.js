import React from 'react';
import './App.css';
import Body from './components/Body';
import Example from './components/Example'
import { Router } from '@reach/router'

const CharactersContext = React.createContext()

class App extends React.Component {
  state = {
    characters: []
  }

  async componentDidMount() {
    const dataRaw = await fetch('https://swapi.co/api/people/')
    const data = await dataRaw.json()

    this.setState({characters: data.results})
  }

  consoleLogState = () => {
    console.log(this.state)
    this.setState({characters: this.state.characters.concat(this.state.characters)})
  }

  render() {
    const context = {
      characters: this.state.characters,
      imprimirEstado: this.consoleLogState
    }

    return (
      <CharactersContext.Provider value={context}>
        <div className="App">
          <Router>
            <Body path="/" />
            <Example path="hola" />
          </Router>
        </div>
      </CharactersContext.Provider>
    );
  }
}

export default App

export {
  CharactersContext
}
