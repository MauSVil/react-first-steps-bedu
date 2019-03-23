import React from 'react';

class Message extends React.Component {
  state = {
    title: 'Este es mi título por defecto'
  }

  componentDidMount() {
    this.setState({
      title: this.props.title ? this.props.title : this.state.title
    })
  }

  render() {
    return (
      <a
        style={{color: this.props.color}}
        href={this.props.site}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.state.title}
      </a>
    );
  }
}

export default Message;
