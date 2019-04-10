import React from 'react';
import './App.css';
import Body from './components/Body';
import Posts from './components/Posts'
import Nav from './components/Nav'
import { Router } from '@reach/router'

const Context = React.createContext()

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

  render() {
    const context = { ...this.state }

    return (
      <Context.Provider value={context}>
          <div className="App">
            <Nav />
            <Router>
              <Body path="/" />
              <Posts path="posts" />
            </Router>
          </div>
      </Context.Provider>
    );
  }
}

export default App

export {
  Context
}
