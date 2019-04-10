import React from 'react';
import './App.css';
import Body from './components/Body';
import Posts from './components/Posts'
import PostCreate from './components/PostCreate'
import PostContainer from './components/PostContainer'
import Nav from './components/Nav'
import { Router } from '@reach/router'

const Context = React.createContext()

class App extends React.Component {
  state = {
    characters: [],
    posts: []
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

  putDataFromLocalAPI = async (type, body) => {
    try {
      return await fetch(
      `http://localhost:4000/${type}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      )
    } catch (e) {
      return e
    }
  }

  render() {
    const context = {
      ...this.state,
      putDataFromLocalAPI: this.putDataFromLocalAPI
    }

    return (
      <Context.Provider value={context}>
          <div className="App">
            <Nav />
            <Router>
              <Body path="/" />
              <Posts path="posts">
                <PostContainer path="/" />
                <PostCreate path="create" />
              </Posts>
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
