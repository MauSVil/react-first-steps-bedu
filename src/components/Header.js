import React from 'react';
import Message from './Message';
import { CharactersContext } from '../App'

const RenderCharacters = function(context) {
  return (
    <header className="App-header">
    { context.characters.map(function(character, index){
        return (
          <Message
            key={`${character.name}-${index}`}
            color={character.eye_color}
            site={character.url}
            title={character.name}
            action={context.imprimirEstado}
          />
        );
      })
    }
    </header>
  )
}

const Header = function(props) {
  return (
    <CharactersContext.Consumer>
      { RenderCharacters }
    </CharactersContext.Consumer>
  );
}

export default Header;
