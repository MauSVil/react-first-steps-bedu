import React from 'react';
import { Logo } from './Logo';
import Message from './Message';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <Message
          cssClass="type1"
          title="Google"
          site="https://google.com/"
        />
        <Message
          cssClass="type2"
          title="Facebook"
          site="https://facebook.com/"
        />
      </header>
    );
  }
}

export default Header;
