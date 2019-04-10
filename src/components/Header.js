import React from 'react';
import Message from './Message';
import { Context } from '../App'

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
    <Context.Consumer>
      { RenderCharacters }
    </Context.Consumer>
  );
}

export default Header;
