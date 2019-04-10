import React from 'react';
import './App.css';
import Body from './components/Body';
import Posts from './components/Posts'
import Nav from './components/Nav'
import { Router } from '@reach/router'

const CharactersContext = React.createContext()

class App extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.getDataFromSWAPI()
    this.getDataFromLocalAPI('posts')
  }

  async getDataFromSWAPI() {
    const dataRaw = await fetch('https://swapi.co/api/people/')
    const data = await dataRaw.json()

    this.setState({characters: data.results})
  }

  async getDataFromLocalAPI(type) {
    const dataRaw = await fetch(`http://localhost:4000/${type}`)
    const data = await dataRaw.json()

    this.setState({[type]: data})
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
          <Nav />
          <Router>
            <Body path="/" />
            <Posts path="posts" />
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
