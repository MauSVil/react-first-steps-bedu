import React from 'react';
import './Message.css';

class Message extends React.Component {
  render() {
    return (
      <a
        className={this.props.cssClass}
        href={this.props.site}
        target="_blank"
      >
        {this.props.title}
      </a>
    );
  }
}

export default Message;
