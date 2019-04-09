import React from 'react';

function Message(props) {
    return (
      <p
        style={{color: props.color}}
        href={props.site}
        target="_blank"
        onClick={props.action}
        rel="noopener noreferrer"
      >
        {
          props.title ? props.title : 'Este es mi mensaje por defecto'
        }
      </p>
    );
}

export default Message;
