import React from 'react';
import { Logo } from './Logo';
import Message from './Message';

class Header extends React.Component {
  render() {
    console.log("RENDER")
    return (
      <header className="App-header">
        <Logo />
        <Message
          color="rgb(234, 222, 214)"
          site="https://google.com/"
        />
        <Message
          color="#eeeeee"
          title="Facebook"
          site="https://facebook.com/"
        />
      </header>
    );
  }
}

export default Header;
