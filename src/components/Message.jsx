import React from 'react';

function Message(props) {
    return (
      <a
        style={{color: props.color}}
        href={props.site}
        target="_blank"
        rel="noopener noreferrer"
      >
        {
          props.title ? props.title : 'Este es mi mensaje por defecto'
        }
      </a>
    );
}

export default Message;
