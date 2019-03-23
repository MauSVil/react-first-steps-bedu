import React from 'react';
//import { Logo } from './Logo';
import Message from './Message';

class Header extends React.Component {
  state = {
    info: []
  }

  async componentDidMount() {
    const dataRaw = await fetch('https://swapi.co/api/people/')
    const data = await dataRaw.json()

    this.setState({info: data.results})
  }

  render() {
    const characters = this.state.info.map(function(character, index){
      return (
        <Message
          key={`${character.name}-${index}`}
          color={character.eye_color}
          site={character.url}
          title={character.name}
        />
      );
    });

    return (
      <header className="App-header">
      { characters }
      </header>
    );
  }
}

export default Header;
